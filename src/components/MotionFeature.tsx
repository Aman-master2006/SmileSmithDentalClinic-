import { Reveal } from "./Reveal";

const orbitLabels = [
  "Personalized Guidance",
  "Patient Comfort",
  "Clear Communication",
];

function ToothIllustration() {
  return (
    <svg viewBox="0 0 200 200" className="h-44 w-44 sm:h-52 sm:w-52" role="img" aria-label="Stylised tooth illustration">
      <defs>
        <linearGradient id="toothFill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--secondary)" />
          <stop offset="100%" stopColor="var(--mint)" />
        </linearGradient>
      </defs>
      <path
        d="M100 38c-16 0-24 8.4-36 8.4-13.8 0-26.4 10.4-26.4 29 0 13.9 4.6 22 8.1 34.3 2.7 9.3 3.5 20 4.9 30.6 1.2 9.3 4.5 16.5 11.9 16.5 11 0 9.7-17.8 13.9-30.7 2.6-8 8-12.9 15.8-12.9s13.2 4.9 15.8 12.9c4.2 12.9 2.9 30.7 13.9 30.7 7.4 0 10.7-7.2 11.9-16.5 1.4-10.6 2.2-21.3 4.9-30.6 3.5-12.3 8.1-20.4 8.1-34.3 0-18.6-12.6-29-26.4-29-12 0-20-8.4-36-8.4z"
        fill="url(#toothFill)"
        stroke="var(--primary)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M78 66c-5 3-8 8-8.6 14"
        fill="none"
        stroke="var(--primary)"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path d="M148 30l2 5.4 5.4 2-5.4 2-2 5.4-2-5.4-5.4-2 5.4-2z" fill="var(--primary-glow)" opacity="0.8" />
      <path d="M52 22l1.5 4 4 1.5-4 1.5-1.5 4-1.5-4-4-1.5 4-1.5z" fill="var(--primary-glow)" opacity="0.5" />
    </svg>
  );
}

export function MotionFeature() {
  return (
    <section id="experience" className="relative overflow-hidden py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            The Smile Smith Way
          </p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            A Better Dental Experience Starts Here
          </h2>
        </Reveal>

        <Reveal delay={0.15} className="mt-14 flex justify-center">
          <div className="relative flex h-[22rem] w-full max-w-xl items-center justify-center sm:h-[26rem]">
            {/* Soft gradient lighting */}
            <div
              className="pulse-soft absolute h-64 w-64 rounded-full bg-primary/15 blur-3xl sm:h-80 sm:w-80"
              aria-hidden="true"
            />
            {/* Thin rotating outline */}
            <div
              className="spin-slower absolute inset-6 rounded-full border border-dashed border-primary/25"
              aria-hidden="true"
            />
            <div
              className="spin-slow absolute inset-14 rounded-full border border-primary/10"
              aria-hidden="true"
            />

            {/* Orbiting labels */}
            <div className="spin-slower absolute inset-0" aria-hidden="false">
              {orbitLabels.map((label, index) => {
                const angle = ((index * 120 - 90) * Math.PI) / 180;
                const x = 50 + 46 * Math.cos(angle);
                const y = 50 + 46 * Math.sin(angle);
                return (
                  <div
                    key={label}
                    className="absolute"
                    style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
                  >
                    <span className="counter-spin-slower block whitespace-nowrap rounded-full border border-border bg-card/95 px-4 py-2 text-xs font-semibold text-foreground shadow-soft">
                      {label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Floating particles */}
            <span className="float-slow absolute left-[12%] top-[22%] h-2 w-2 rounded-full bg-primary/40" aria-hidden="true" />
            <span className="float-slower absolute right-[14%] top-[30%] h-1.5 w-1.5 rounded-full bg-primary-glow/60" aria-hidden="true" />
            <span className="float-slow absolute bottom-[18%] left-[24%] h-1.5 w-1.5 rounded-full bg-primary/30" aria-hidden="true" style={{ animationDelay: "-4s" }} />
            <span className="float-slower absolute bottom-[24%] right-[22%] h-2 w-2 rounded-full bg-mint" aria-hidden="true" style={{ animationDelay: "-6s" }} />

            <div className="float-slow relative">
              <ToothIllustration />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
