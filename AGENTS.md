<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules

- Design system lives in `src/styles.css` (oklch semantic tokens, Manrope display / Inter body). Components must use semantic token classes only — never hardcoded colors (no `text-white`, `bg-[#...]`).
- All clinic details (name, address, phone, WhatsApp, links, rating) come from `src/data/clinic.ts`. Never hardcode contact details in components; update the data file instead.
- No unverifiable business claims: doctor names/credentials, opening hours, map embed coordinates, social accounts, review quotes, or outcome guarantees may not be added until the clinic confirms them. Current copy intentionally uses summaries and "call to confirm" wording.
- Appointment enquiries insert into `public.appointment_enquiries` (anon INSERT-only RLS) through `src/lib/enquiry.functions.ts`, which re-validates with zod server-side. Do not expose the table for reads.
- The site is a single-page route `/` with in-page anchor navigation; `/privacy` and the `/sitemap.xml` server route are the only other routes.
- Animations use `motion/react` (Framer Motion) plus CSS keyframe utilities from `src/styles.css`; scroll animations play once and everything respects `prefers-reduced-motion`.
