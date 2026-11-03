import { HeartHandshake, MapPin, MessageSquareText, Smile } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  { icon: HeartHandshake, label: "Patient-focused consultations" },
  { icon: MessageSquareText, label: "Clear treatment explanations" },
  { icon: MapPin, label: "Convenient Pathankot location" },
  { icon: Smile, label: "Friendly, welcoming environment" },
];

export function TrustStrip() {
  return (
    <section aria-label="Why patients choose us" className="border-b border-border bg-card">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-x-6 gap-y-4 px-4 py-6 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {items.map((item, index) => (
          <Reveal key={item.label} delay={index * 0.08} y={14}>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary">
                <item.icon className="h-5 w-5 text-primary" aria-hidden="true" />
              </span>
              <p className="text-sm font-medium text-foreground/85">{item.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
