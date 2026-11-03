import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { doctors } from "@/data/doctors";

export function Doctors() {
  return (
    <section id="doctors" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Meet Our Team"
          title="Dedicated Dental Care by Experienced Hands"
          description="At Smile Smith Dental Clinic, our qualified dental surgeons take the time to understand your needs, explain each option clearly, and deliver attentive care for the whole family."
        />

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
          {doctors.map((doctor, index) => (
            <Reveal key={doctor.id} delay={index * 0.12} y={24}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-8">
                {/* Doctor Portrait */}
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-secondary">
                  <img
                    src={doctor.image}
                    alt={doctor.imageAlt}
                    width={600}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </div>

                {/* Doctor Info */}
                <div className="mt-6 flex flex-1 flex-col">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary">
                      {doctor.role}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-mint px-3 py-1 text-xs font-medium text-foreground">
                      {doctor.specialty}
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-2xl font-bold text-foreground">
                    {doctor.name}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {doctor.bio}
                  </p>

                  {/* Focus Highlights */}
                  <ul className="mt-4 space-y-2 border-t border-border/60 pt-4">
                    {doctor.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-center gap-2 text-xs font-medium text-foreground/90"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Actions */}
                  <div className="mt-6 flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href="#book"
                      className="group/btn inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground shadow-glow transition-all hover:-translate-y-0.5"
                    >
                      <span>Book Appointment</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" aria-hidden="true" />
                    </a>
                    <a
                      href={doctor.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 rounded-full border border-border bg-card px-4 py-2.5 text-xs font-semibold text-foreground transition-all hover:bg-secondary hover:-translate-y-0.5"
                      aria-label={`Enquire with ${doctor.name} on WhatsApp`}
                    >
                      <MessageCircle className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

