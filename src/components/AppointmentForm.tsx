import { useEffect, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { motion } from "motion/react";
import { CalendarCheck, Loader2, MessageCircle, Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import { submitEnquiry } from "@/lib/enquiry.functions";
import { enquirySchema } from "@/lib/enquiry-schema";
import { clinic, telUrl, whatsappUrl, buildAppointmentWhatsAppUrl } from "@/data/clinic";
import { treatments } from "@/data/treatments";


type FormValues = {
  name: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  treatment: string;
  message: string;
  website: string;
};

const emptyValues: FormValues = {
  name: "",
  phone: "",
  preferredDate: "",
  preferredTime: "",
  treatment: "",
  message: "",
  website: "",
};

const inputClass =
  "w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40";

export function AppointmentForm() {
  const [values, setValues] = useState<FormValues>(emptyValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [minDate, setMinDate] = useState("");
  const [redirectUrl, setRedirectUrl] = useState("");
  const submitEnquiryFn = useServerFn(submitEnquiry);

  useEffect(() => {
    setMinDate(new Date().toISOString().slice(0, 10));
  }, []);

  const update = (field: keyof FormValues) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }));
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const parsed = enquirySchema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !fieldErrors[key]) {
          fieldErrors[key] = issue.message;
        }
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setStatus("loading");
    setErrorMessage("");

    const waUrl = buildAppointmentWhatsAppUrl(values);
    setRedirectUrl(waUrl);

    try {
      await submitEnquiryFn({ data: values });
    } catch {
      // If saving fails or network issue occurs, continue so the user still reaches WhatsApp
    }

    setStatus("success");
    setValues(emptyValues);

    // Direct redirect to WhatsApp
    window.location.href = waUrl;
  }

  return (
    <section id="book" className="bg-booking-gradient py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-[2fr_3fr] lg:gap-16">
        {/* Left: intro + direct contact options */}
        <div>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Appointments
            </p>
            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
              Let's Take the Next Step Toward Your Smile
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Have a question about your dental care? Contact Smile Smith
              Dental Clinic to enquire about available appointments.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-8 space-y-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-mint">
                  <MessageCircle className="h-5 w-5 text-foreground" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-foreground">WhatsApp us</span>
                  <span className="block text-xs text-muted-foreground">
                    Send a prefilled message to {clinic.phoneDisplay}
                  </span>
                </span>
              </a>
              <a
                href={telUrl}
                className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary">
                  <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-foreground">Call the clinic</span>
                  <span className="block text-xs text-muted-foreground">{clinic.phoneDisplay}</span>
                </span>
              </a>
            </div>
            <p className="mt-6 text-xs leading-relaxed text-muted-foreground/80">
              Your details are used only to respond to your enquiry and are
              never shared. Submitting this form forwards your enquiry directly
              to our WhatsApp to confirm appointment availability.
            </p>
          </Reveal>
        </div>

        {/* Right: form card */}
        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-lift sm:p-8">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center py-10 text-center"
                role="status"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-mint">
                  <MessageCircle className="h-8 w-8 text-foreground" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-foreground">
                  Redirecting to WhatsApp…
                </h3>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  Your enquiry has been prepared. If WhatsApp did not open automatically, please click the button below:
                </p>
                {redirectUrl ? (
                  <a
                    href={redirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:-translate-y-0.5"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    Open WhatsApp Chat
                  </a>
                ) : null}
                <button
                  type="button"
                  className="mt-4 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                  onClick={() => setStatus("idle")}
                >
                  Send another enquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label htmlFor="enquiry-name" className="mb-1.5 block text-sm font-medium text-foreground">
                      Full Name <span aria-hidden="true" className="text-primary">*</span>
                    </label>
                    <input
                      id="enquiry-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={values.name}
                      onChange={update("name")}
                      className={inputClass}
                      aria-invalid={Boolean(errors["name"])}
                      aria-describedby={errors["name"] ? "enquiry-name-error" : undefined}
                      placeholder="e.g. Priya Sharma"
                    />
                    {errors["name"] ? <p id="enquiry-name-error" className="mt-1.5 text-xs font-medium text-destructive">{errors["name"]}</p> : null}
                  </div>

                  <div>
                    <label htmlFor="enquiry-phone" className="mb-1.5 block text-sm font-medium text-foreground">
                      Phone Number <span aria-hidden="true" className="text-primary">*</span>
                    </label>
                    <input
                      id="enquiry-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      value={values.phone}
                      onChange={update("phone")}
                      className={inputClass}
                      aria-invalid={Boolean(errors["phone"])}
                      aria-describedby={errors["phone"] ? "enquiry-phone-error" : undefined}
                      placeholder="e.g. 98765 43210"
                    />
                    {errors["phone"] ? <p id="enquiry-phone-error" className="mt-1.5 text-xs font-medium text-destructive">{errors["phone"]}</p> : null}
                  </div>

                  <div>
                    <label htmlFor="enquiry-treatment" className="mb-1.5 block text-sm font-medium text-foreground">
                      Treatment of Interest <span aria-hidden="true" className="text-primary">*</span>
                    </label>
                    <select
                      id="enquiry-treatment"
                      name="treatment"
                      required
                      value={values.treatment}
                      onChange={update("treatment")}
                      className={inputClass}
                      aria-invalid={Boolean(errors["treatment"])}
                      aria-describedby={errors["treatment"] ? "enquiry-treatment-error" : undefined}
                    >
                      <option value="" disabled>
                        Select a treatment
                      </option>
                      {treatments.map((t) => (
                        <option key={t.slug} value={t.name}>
                          {t.name}
                        </option>
                      ))}
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                    {errors["treatment"] ? <p id="enquiry-treatment-error" className="mt-1.5 text-xs font-medium text-destructive">{errors["treatment"]}</p> : null}
                  </div>

                  <div>
                    <label htmlFor="enquiry-date" className="mb-1.5 block text-sm font-medium text-foreground">
                      Preferred Date <span aria-hidden="true" className="text-primary">*</span>
                    </label>
                    <input
                      id="enquiry-date"
                      name="preferredDate"
                      type="date"
                      required
                      min={minDate || undefined}
                      value={values.preferredDate}
                      onChange={update("preferredDate")}
                      className={inputClass}
                      aria-invalid={Boolean(errors["preferredDate"])}
                      aria-describedby={errors["preferredDate"] ? "enquiry-date-error" : undefined}
                    />
                    {errors["preferredDate"] ? <p id="enquiry-date-error" className="mt-1.5 text-xs font-medium text-destructive">{errors["preferredDate"]}</p> : null}
                  </div>

                  <div>
                    <label htmlFor="enquiry-time" className="mb-1.5 block text-sm font-medium text-foreground">
                      Preferred Time <span aria-hidden="true" className="text-primary">*</span>
                    </label>
                    <input
                      id="enquiry-time"
                      name="preferredTime"
                      type="text"
                      required
                      value={values.preferredTime}
                      onChange={update("preferredTime")}
                      className={inputClass}
                      aria-invalid={Boolean(errors["preferredTime"])}
                      aria-describedby={errors["preferredTime"] ? "enquiry-time-error" : undefined}
                      placeholder="e.g. 11:30 AM"
                    />
                    {errors["preferredTime"] ? <p id="enquiry-time-error" className="mt-1.5 text-xs font-medium text-destructive">{errors["preferredTime"]}</p> : null}
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="enquiry-message" className="mb-1.5 block text-sm font-medium text-foreground">
                      Message <span className="text-xs font-normal text-muted-foreground">(optional)</span>
                    </label>
                    <textarea
                      id="enquiry-message"
                      name="message"
                      rows={3}
                      value={values.message}
                      onChange={update("message")}
                      className={`${inputClass} resize-none`}
                      aria-invalid={Boolean(errors["message"])}
                      aria-describedby={errors["message"] ? "enquiry-message-error" : undefined}
                      placeholder="Anything you'd like us to know before your visit"
                    />
                    {errors["message"] ? <p id="enquiry-message-error" className="mt-1.5 text-xs font-medium text-destructive">{errors["message"]}</p> : null}
                  </div>
                </div>

                {/* Honeypot — hidden from real visitors */}
                <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
                  <label htmlFor="enquiry-website">Website</label>
                  <input
                    id="enquiry-website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={values.website}
                    onChange={update("website")}
                  />
                </div>

                {status === "error" ? (
                  <p role="alert" className="mt-4 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm font-medium text-destructive">
                    {errorMessage}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                      Redirecting to WhatsApp…
                    </>
                  ) : (
                    <>
                      <MessageCircle className="h-4 w-4" aria-hidden="true" />
                      Request Appointment on WhatsApp
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
