import { useEffect, useState } from "react";
import { CalendarCheck, Phone } from "lucide-react";
import { telUrl } from "@/data/clinic";

/**
 * Sticky mobile action bar. Hidden while the booking form or the footer is on
 * screen, so it never covers form fields or footer content.
 */
export function MobileActionBar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const targets = ["#book", "#site-footer"]
      .map((selector) => document.querySelector(selector))
      .filter((el): el is Element => Boolean(el));
    if (targets.length === 0) return;

    const visible = new Map<Element, boolean>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) visible.set(entry.target, entry.isIntersecting);
        const anyVisible = Array.from(visible.values()).some(Boolean);
        setHidden(anyVisible);
      },
      { threshold: 0.15 },
    );
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/95 backdrop-blur transition-transform duration-300 md:hidden ${
        hidden ? "translate-y-full" : "translate-y-0"
      }`}
    >
      <div
        className="grid grid-cols-2 gap-2 p-2.5"
        style={{ paddingBottom: "calc(0.625rem + env(safe-area-inset-bottom))" }}
      >
        <a
          href={telUrl}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-4 py-3 text-sm font-semibold text-foreground"
        >
          <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
          Call
        </a>
        <a
          href="#book"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
        >
          <CalendarCheck className="h-4 w-4" aria-hidden="true" />
          Book Appointment
        </a>
      </div>
    </div>
  );
}
