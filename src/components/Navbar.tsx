import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useReducedMotion } from "motion/react";
import { CalendarCheck, Menu, X } from "lucide-react";
import clinicLogo from "@/assets/clinic-logo.jpg";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Doctors", href: "#doctors" },
  { label: "Treatments", href: "#treatments" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <img
      src={clinicLogo}
      alt="Smile Smith Caring Hands Logo"
      width={44}
      height={44}
      className={`${className} rounded-full object-cover ring-1 ring-border shadow-soft`}
    />
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Thin reading-progress line */}
      <motion.div
        className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-gradient-to-r from-primary to-primary-glow"
        style={{ scaleX: scrollYProgress }}
        aria-hidden="true"
      />
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-card/90 shadow-soft backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <nav
          className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
          aria-label="Main navigation"
        >
          <a href="#home" className="flex items-center gap-2.5">
            <LogoMark />
            <span className="leading-tight">
              <span className="block font-display text-lg font-bold text-foreground">
                Smile Smith
              </span>
              <span className="block text-[0.65rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Dental Clinic
              </span>
            </span>
          </a>

          <ul className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative text-sm font-medium text-foreground/80 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-primary after:transition-all hover:text-foreground hover:after:w-full"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#book"
              className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5 sm:inline-flex"
            >
              <CalendarCheck className="h-4 w-4" aria-hidden="true" />
              Book Appointment
            </a>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground lg:hidden"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {menuOpen ? (
            <motion.div
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
              animate={reduceMotion ? { opacity: 1 } : { opacity: 1, height: "auto" }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden border-t border-border bg-card/95 backdrop-blur-md lg:hidden"
            >
              <ul className="space-y-1 px-4 py-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="pt-2">
                  <a
                    href="#book"
                    className="flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
                    onClick={() => setMenuOpen(false)}
                  >
                    <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                    Book Appointment
                  </a>
                </li>
              </ul>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>
    </>
  );
}
