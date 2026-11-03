import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowRight, CalendarCheck, CheckCircle2, Star } from "lucide-react";
import heroImage from "@/assets/hero-consultation.jpg";
import { ratingLine } from "@/data/reviews";

const trustPoints = [
  "Patient-focused care",
  "Comfortable clinic environment",
  "Clear treatment explanations",
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const orbY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const fadeUp = (delay: number) => ({
    initial: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 26 },
    animate: reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease },
  });

  return (
    <section
      id="home"
      ref={sectionRef}
      className="bg-hero-gradient relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24"
    >
      {/* Soft background orbs */}
      <motion.div style={{ y: orbY }} className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="drift absolute -top-24 right-[8%] h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
        <div className="drift absolute bottom-0 left-[4%] h-64 w-64 rounded-full bg-mint blur-3xl" style={{ animationDelay: "-8s" }} />
      </motion.div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        {/* Left: copy */}
        <div>
          <motion.p
            {...fadeUp(0.05)}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary"
          >
            Your Smile, Our Priority
          </motion.p>

          <motion.h1
            {...fadeUp(0.15)}
            className="mt-5 text-4xl font-bold leading-[1.1] text-foreground sm:text-5xl lg:text-[3.4rem]"
          >
            Confidence Begins With a{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Healthy Smile.
            </span>
          </motion.h1>

          <motion.p {...fadeUp(0.25)} className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Discover thoughtful dental care in a welcoming environment at Smile
            Smith Dental Clinic, Pathankot. Our focus is helping you understand
            your dental needs and feel comfortable throughout your care journey.
          </motion.p>

          <motion.div {...fadeUp(0.35)} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#book"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:-translate-y-0.5 hover:shadow-lift"
            >
              Book an Appointment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="#treatments"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Explore Our Services
            </a>
          </motion.div>

          <motion.ul {...fadeUp(0.45)} className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden="true" />
                {point}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Right: image composition */}
        <motion.div
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          {/* Animated circular ring */}
          <div className="spin-slower pointer-events-none absolute -inset-6 rounded-full border border-dashed border-primary/25 sm:-inset-10" aria-hidden="true" />
          <div className="spin-slow pointer-events-none absolute -inset-2 rounded-full border border-primary/10 sm:-inset-4" aria-hidden="true" />

          <motion.div style={{ y: imageY }} className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-lift">
              <img
                src={heroImage}
                alt="A friendly dentist at Smile Smith Dental Clinic consulting with a smiling patient"
                width={1024}
                height={1280}
                className="aspect-[4/5] w-full object-cover"
                fetchPriority="high"
              />
            </div>

            {/* Rating badge */}
            <motion.div
              {...fadeUp(0.6)}
              className="float-slow absolute -left-3 top-6 rounded-2xl border border-border bg-card/95 px-4 py-3 shadow-soft backdrop-blur sm:-left-8"
            >
              <div className="flex items-center gap-1" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mt-1 text-xs font-semibold text-foreground">{ratingLine}</p>
            </motion.div>

            {/* Floating appointment card */}
            <motion.div
              {...fadeUp(0.7)}
              className="float-slower absolute -bottom-6 -right-2 rounded-2xl border border-border bg-card/95 p-4 shadow-soft backdrop-blur sm:-right-6"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                  <CalendarCheck className="h-5 w-5 text-primary" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">Ready when you are</p>
                  <a href="#book" className="text-xs font-semibold text-primary hover:underline">
                    Book an Appointment
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Decorative tooth outline */}
            <svg viewBox="0 0 64 64" className="float-slow absolute -right-4 top-1/4 h-10 w-10 text-primary/30" aria-hidden="true" style={{ animationDelay: "-3s" }}>
              <path
                d="M32 12c-5 0-7.6 2.6-11.4 2.6-4.3 0-8.2 3.2-8.2 9 0 4.3 1.4 6.8 2.5 10.6.8 2.9 1.1 6.2 1.5 9.5.4 2.9 1.4 5.1 3.7 5.1 3.4 0 3-5.5 4.3-9.5.8-2.5 2.5-4 4.9-4s4.1 1.5 4.9 4c1.3 4 .9 9.5 4.3 9.5 2.3 0 3.3-2.2 3.7-5.1.4-3.3.7-6.6 1.5-9.5 1.1-3.8 2.5-6.3 2.5-10.6 0-5.8-3.9-9-8.2-9-3.8 0-6.4-2.6-11.4-2.6z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
