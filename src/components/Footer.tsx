import { MapPin, MessageCircle, Phone } from "lucide-react";
import clinicLogo from "@/assets/clinic-logo.jpg";
import { clinic, telUrl, whatsappUrl } from "@/data/clinic";
import { treatments } from "@/data/treatments";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Doctors", href: "#doctors" },
  { label: "Treatments", href: "#treatments" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="site-footer" className="bg-navy text-ivory/80">
      {/* Subtle animated gradient line */}
      <div
        className="pulse-soft h-0.5 bg-gradient-to-r from-primary-glow via-mint to-primary-glow"
        aria-hidden="true"
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="#home" className="inline-flex items-center gap-3">
            <img
              src={clinicLogo}
              alt="Smile Smith Caring Hands Logo"
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-cover ring-1 ring-ivory/25 shadow-soft"
            />
            <span className="leading-tight">
              <span className="block font-display text-lg font-bold text-ivory">Smile Smith</span>
              <span className="block text-[0.65rem] font-medium uppercase tracking-[0.18em] text-ivory/50">
                Dental Clinic
              </span>
            </span>
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/70">
            Thoughtful, patient-focused dental care in Pathankot — clear
            explanations, comfortable visits, and guidance you can trust.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <p className="font-display text-sm font-bold uppercase tracking-wide text-ivory">
            Quick Links
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-ivory">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-display text-sm font-bold uppercase tracking-wide text-ivory">
            Treatments
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {treatments.slice(0, 6).map((treatment) => (
              <li key={treatment.slug}>
                <a href="#treatments" className="transition-colors hover:text-ivory">
                  {treatment.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-bold uppercase tracking-wide text-ivory">
            Contact
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={telUrl} className="flex items-center gap-2 transition-colors hover:text-ivory">
                <Phone className="h-4 w-4 shrink-0 text-mint" aria-hidden="true" />
                {clinic.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-mint" aria-hidden="true" />
              <span>{clinic.address.full}</span>
            </li>
            <li>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp Us
              </a>
            </li>
            <li>
              <a
                href={clinic.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-ivory/70 transition-colors hover:text-ivory"
              >
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Google Maps Directions
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-ivory/50 sm:flex-row sm:px-6">
          <p>© {year} {clinic.name}. All rights reserved.</p>
          <a href="/privacy" className="transition-colors hover:text-ivory">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
