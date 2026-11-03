import { CalendarClock, HeartHandshake, MessagesSquare, Sparkles } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const features = [
  {
    icon: MessagesSquare,
    title: "Clear Treatment Explanations",
    text: "We walk you through your diagnosis and options in plain language, so you can make informed decisions with confidence.",
  },
  {
    icon: HeartHandshake,
    title: "Friendly Patient Interaction",
    text: "A warm, unhurried approach that puts even nervous patients at ease from the moment they arrive.",
  },
  {
    icon: Sparkles,
    title: "A Clean, Welcoming Environment",
    text: "A hygienic, well-kept clinic space designed to keep you comfortable throughout your visit.",
  },
  {
    icon: CalendarClock,
    title: "Convenient Appointment Enquiries",
    text: "Simple ways to reach us — call, WhatsApp, or send an enquiry — and find a time that suits you.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Why Choose Smile Smith?"
          title="Your Comfort Matters at Every Step"
        />

        <div className="relative mt-12">
          {/* Decorative connecting line (desktop only) */}
          <div
            className="absolute left-[12%] right-[12%] top-16 hidden border-t-2 border-dashed border-primary/15 lg:block"
            aria-hidden="true"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 0.09} y={22}>
                <div className="group relative h-full rounded-2xl border border-border bg-background p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary transition-colors group-hover:bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {feature.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
