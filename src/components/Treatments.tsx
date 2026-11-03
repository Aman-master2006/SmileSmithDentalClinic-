import { ArrowRight } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { treatments } from "@/data/treatments";

export function Treatments() {
  return (
    <section id="treatments" className="bg-secondary/50 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Our Treatments"
          title="Complete Care for Your Smile"
          description="Explore dental treatments designed to address your oral health needs. Contact our clinic to discuss which options may be suitable for you."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {treatments.map((treatment, index) => (
            <Reveal key={treatment.slug} delay={(index % 4) * 0.08} y={22}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <div className="overflow-hidden">
                  <img
                    src={treatment.image}
                    alt={treatment.name}
                    width={treatment.imageWidth}
                    height={treatment.imageHeight}
                    loading="lazy"
                    className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-base font-bold text-foreground">
                    {treatment.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {treatment.description}
                  </p>
                  <a
                    href="#book"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                    aria-label={`Enquire about ${treatment.name}`}
                  >
                    Enquire Now
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
