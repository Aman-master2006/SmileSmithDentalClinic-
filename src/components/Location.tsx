import { Clock, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { clinic, telUrl, whatsappUrl } from "@/data/clinic";

export function Location() {
  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Find Us"
          title="Visit Smile Smith Dental Clinic"
          description="We're easy to reach on Dalhousie Road, right by Gandhi Chowk in Pathankot."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Address / contact card */}
          <Reveal>
            <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary">
                <MapPin className="h-6 w-6 text-primary" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                {clinic.name}
              </h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                {clinic.address.line1},<br />
                {clinic.address.area}, {clinic.address.city}, {clinic.address.state}{" "}
                {clinic.address.postalCode},<br />
                {clinic.address.country}
              </p>

              <a
                href={telUrl}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {clinic.phoneDisplay}
              </a>

              <p className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>
                  Please call to confirm today's opening timings.
                </span>
              </p>

              <div className="mt-auto flex flex-wrap gap-3 pt-6">
                <a
                  href={clinic.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
                >
                  <Navigation className="h-4 w-4" aria-hidden="true" />
                  Get Directions
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  WhatsApp
                </a>
              </div>
            </div>
          </Reveal>

          {/* Stylised directions panel (no map embed until coordinates are verified) */}
          <Reveal delay={0.1}>
            <div className="relative flex h-full min-h-72 flex-col items-center justify-center overflow-hidden rounded-3xl border border-border bg-secondary/60 p-8 text-center shadow-soft">
              <div
                className="absolute inset-0 opacity-[0.35]"
                aria-hidden="true"
                style={{
                  backgroundImage:
                    "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
                  backgroundSize: "36px 36px",
                }}
              />
              <div
                className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-2xl"
                aria-hidden="true"
              />
              <span className="pulse-soft relative flex h-16 w-16 items-center justify-center rounded-full bg-card shadow-soft">
                <MapPin className="h-8 w-8 text-primary" aria-hidden="true" />
              </span>
              <h3 className="relative mt-5 font-display text-lg font-bold text-foreground">
                Gandhi Chowk, Pathankot
              </h3>
              <p className="relative mt-2 max-w-xs text-sm text-muted-foreground">
                Near Ashoka Medical Store, on Dalhousie Road. Open the exact
                location in Google Maps for turn-by-turn directions.
              </p>
              <a
                href={clinic.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-background"
              >
                <Navigation className="h-4 w-4 text-primary" aria-hidden="true" />
                Open in Google Maps
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
