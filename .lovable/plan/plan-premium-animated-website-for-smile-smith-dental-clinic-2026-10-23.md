# Plan: Premium Animated Website for Smile Smith Dental Clinic

Build a complete, production-ready single-page website for Smile Smith Dental Clinic (Pathankot) from the uploaded master prompt, on the existing TanStack Start + Tailwind v4 stack. Decisions confirmed with the user: Lovable Cloud enquiry form, AI-generated imagery, all 8 treatments shown, review badge + 2 review cards.

## 1. Backend (Lovable Cloud)

- Enable Lovable Cloud.
- Migration creates `public.appointment_enquiries` (id uuid, name, phone, preferred_date, preferred_time, treatment, message, created_at) with:
  - GRANTs in the same migration (`INSERT` to anon+authenticated, `ALL` to service_role)
  - RLS enabled; single INSERT-only policy for anon
- `createServerFn` (POST) accepts enquiry data, validates with zod on the server (name length, phone pattern, date/time, lengths), inserts via a server publishable client, returns success only when the insert actually succeeded. Client validates with the same zod schema, shows inline errors, loading state, and a success message only on real success. Honeypot field for spam.

## 2. Design system (src/styles.css)

- Palette in oklch mapped from the brief: navy #102A43, dental blue #1976D2, icy blue #EAF5FF, mint #DFF8F1, ivory backgrounds, body text #526273. All as semantic tokens (`--primary`, `--accent`, etc.) registered in `@theme inline`.
- Fonts loaded via `<link>` in `src/routes/__root.tsx` head: Manrope (headings), Inter (body); referenced from `@theme`.
- Soft shadow + rounded-corner tokens; no hardcoded color utilities in components.

## 3. Central clinic data

- `src/data/clinic.ts`: name, address, phone (+91 75089 79900), WhatsApp number, Google Maps links, rating text, hours placeholder — single source of truth so details update in one place.
- `src/data/treatments.ts` and `src/data/reviews.ts` for content.

## 4. Imagery (AI-generated, saved to src/assets)

Generate in batches (max 4 per response):
1. Hero: friendly dentist consulting with a patient, bright modern clinic, blue/ivory palette.
2. About: clean modern dental treatment room / consultation.
3–6. Treatment visuals: generate a small set of refined treatment illustrations/photos to reuse across the 8 cards (cards also get Lucide line icons), so we stay within 4-generation batches.

Every image: explicit dimensions, alt text, lazy loading below the fold, hero eager.

## 5. Homepage sections (`src/routes/index.tsx` + `src/components/*`)

Single route `/` with in-page anchor navigation. Components:
- `Navbar` — transparent → solid white on scroll, smooth anchor scrolling, animated mobile menu, keyboard accessible, "Book Appointment" CTA.
- `Hero` — two-column; staggered text entrance, floating translucent cards, rating badge "5.0 ★ | 56 Google Reviews", gradient orbs, animated ring, parallax, CTAs (Book / Explore Services).
- `TrustStrip` — 4 verifiable items with line icons, reveal animation.
- `About` — split layout, image reveal, label + heading + copy + "Get in Touch" CTA. No doctor biographies/credentials (unverified).
- `Treatments` — 8 cards (consultation, cleaning & scaling, fillings, root canal, extraction, whitening, braces, crowns & bridges) with image/icon, description, "Enquire Now" linking to the form, staggered entrance, hover lift + image zoom + arrow animation. No outcome guarantees in copy.
- `MotionFeature` — signature SVG tooth illustration with 3 orbiting labels (Personalized Guidance, Patient Comfort, Clear Communication), slow orbital CSS/SVG motion, reduced-motion aware.
- `WhyChooseUs` — 4 feature cards, decorative connecting line on desktop only, scroll animations play once.
- `Reviews` — big 5.0/56 rating display, 2 review cards based on the described Google feedback (attributed as described in the listing, not presented as verbatim quotes), "Read Google Reviews" button linking to a Google search for the clinic profile (direct profile URL to be swapped when provided).
- `AppointmentForm` — light-blue section, form fields per brief, zod validation, loading state, real success only on insert, WhatsApp + call alternatives shown alongside.
- `Location` — address card, click-to-call, WhatsApp button, Google Maps directions button (search-based directions link), map embed only if the exact location is verifiable — otherwise omit. No opening hours shown (schedule unverified) — placeholder marked for clinic confirmation.
- `Footer` — dark navy, logo, description, quick links, phone, address, WhatsApp CTA, maps directions, copyright. No social icons (none verified).
- `MobileActionBar` — sticky bottom "Call" + "Book Appointment" bar with safe-area spacing, hidden when footer is in view so it never covers content.

## 6. Motion system

- Framer Motion (`motion` package) for scroll/entrance/hover; CSS keyframes for decorative floats/orbits.
- `useReducedMotion` respected throughout; scroll-triggered animations fire once; transform/opacity only.

## 7. SEO

- `index.tsx` head: unique title ("Smile Smith Dental Clinic | Dentist in Pathankot, Punjab"), description, og:title/description/type, twitter:card. `__root` keeps generic fallbacks.
- JSON-LD `Dentist` schema with only verified details (name, address, telephone) — no invented hours, coordinates, ratings markup, or domain.
- `src/routes/sitemap[.]xml.tsx` server route; robots.txt already present. Favicon: generate a tooth-mark favicon into `public/`.
- Semantic HTML: one H1, proper H2/H3 hierarchy.

## 8. Verification

- Build + typecheck via harness logs; fix all errors.
- Playwright pass: hero, nav scroll behavior, treatment cards, form submit (real DB insert read back), WhatsApp/call/maps links, mobile 375px layout + sticky bar, no console errors, reduced-motion sanity.
- Update project AGENTS.md with structural decisions; save business facts to memory.
- Report unverified items needing clinic confirmation: full weekly hours, doctor names/credentials, exact Google Maps embed coordinates, direct Google Business Profile URL, and that the 8 treatment list matches actual services.
