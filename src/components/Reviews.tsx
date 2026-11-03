import { ArrowUpRight, Quote, Star } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { clinic } from "@/data/clinic";
import { reviewSummaries } from "@/data/reviews";

export function Reviews() {
  return (
    <section id="reviews" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-start gap-10 lg:grid-cols-[2fr_3fr] lg:gap-14">
          {/* Rating display */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="Patient Experiences"
              title="Experiences That Speak for Themselves"
            />
            <Reveal delay={0.1}>
              <div className="mt-6 flex items-end gap-4">
                <p className="font-display text-6xl font-bold text-primary">{clinic.rating.value}</p>
                <div className="pb-2">
                  <div className="flex gap-0.5" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">
                    {clinic.rating.count} {clinic.rating.source}
                  </p>
                </div>
              </div>
              <a
                href={clinic.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Read Google Reviews
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </a>
            </Reveal>
          </div>

          {/* Review cards */}
          <div className="grid gap-5 sm:grid-cols-2">
            {reviewSummaries.map((review, index) => (
              <Reveal key={review.title} delay={0.12 + index * 0.1} y={22}>
                <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <Quote className="h-6 w-6 text-primary/30" aria-hidden="true" />
                  <div className="mt-3 flex gap-0.5" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <figcaption className="mt-3 font-display text-sm font-bold text-foreground">
                    {review.title}
                  </figcaption>
                  <blockquote className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {review.summary}
                  </blockquote>
                  <p className="mt-4 text-xs font-medium uppercase tracking-wide text-muted-foreground/70">
                    {review.attribution}
                  </p>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.2}>
          <p className="mt-8 text-xs leading-relaxed text-muted-foreground/80">
            These are short summaries of public Google reviews, written to
            reflect their meaning rather than their exact wording. Read the
            original reviews on Google.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
