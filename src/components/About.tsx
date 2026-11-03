import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import aboutImage from "@/assets/about-clinic.jpg";

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        {/* Image side */}
        <Reveal className="relative order-2 lg:order-1">
          <div
            className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-mint/70 blur-2xl"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-10 -right-6 h-44 w-44 rounded-full bg-primary/10 blur-2xl"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-[2rem] shadow-soft">
            <img
              src={aboutImage}
              alt="A clean, modern dental treatment room at Smile Smith Dental Clinic"
              width={1280}
              height={960}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div
            className="absolute -bottom-5 left-6 rounded-2xl border border-border bg-card/95 px-5 py-3 shadow-soft"
            aria-hidden="true"
          >
            <p className="font-display text-sm font-bold text-primary">Pathankot</p>
            <p className="text-xs text-muted-foreground">Gandhi Chowk, Dalhousie Road</p>
          </div>
        </Reveal>

        {/* Copy side */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              About Smile Smith
            </p>
            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
              Thoughtful Dental Care, Centered Around You
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              At Smile Smith Dental Clinic, our goal is to make your dental care
              experience informative, comfortable, and welcoming. We believe
              patients deserve clear explanations, thoughtful guidance, and
              treatment recommendations that address their individual needs.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              From your first enquiry to your follow-up, we take the time to
              listen, explain, and support you at every step of your care.
            </p>
            <a
              href="#contact"
              className="group mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:-translate-y-0.5"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
