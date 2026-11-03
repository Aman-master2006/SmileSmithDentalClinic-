import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { clinic } from "@/data/clinic";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: `Privacy Policy | ${clinic.name}` },
      {
        name: "description",
        content:
          "How Smile Smith Dental Clinic handles the information you share through appointment enquiries on this website.",
      },
      { property: "og:title", content: `Privacy Policy | ${clinic.name}` },
      {
        property: "og:description",
        content:
          "How Smile Smith Dental Clinic handles the information you share through appointment enquiries on this website.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back to home
      </Link>
      <h1 className="mt-6 text-3xl font-bold text-foreground sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Last updated: {new Date().getFullYear()}
      </p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground [&_h2]:font-display [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-foreground">
        <div>
          <h2>What we collect</h2>
          <p className="mt-2">
            When you send an appointment enquiry through this website, we collect
            the details you provide: your name, phone number, preferred date and
            time, the treatment you're interested in, and any optional message.
          </p>
        </div>
        <div>
          <h2>How we use it</h2>
          <p className="mt-2">
            Your details are used only to respond to your enquiry — to contact
            you about appointment availability and answer your questions. We do
            not sell or share your information with third parties, and we do not
            use it for marketing without your consent.
          </p>
        </div>
        <div>
          <h2>What we don't collect</h2>
          <p className="mt-2">
            Please do not include detailed medical information, documents, or
            payment details in the enquiry form. Those are best discussed
            directly with the clinic.
          </p>
        </div>
        <div>
          <h2>Data storage and security</h2>
          <p className="mt-2">
            Enquiries are stored securely and accessible only to the clinic.
            The website uses encrypted connections (HTTPS) in production.
          </p>
        </div>
        <div>
          <h2>Your choices</h2>
          <p className="mt-2">
            If you'd like your enquiry details corrected or removed, contact us
            at {clinic.phoneDisplay} and we'll take care of it.
          </p>
        </div>
      </div>
    </div>
  );
}
