import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { About } from "@/components/About";
import { Doctors } from "@/components/Doctors";
import { Treatments } from "@/components/Treatments";
import { MotionFeature } from "@/components/MotionFeature";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Reviews } from "@/components/Reviews";
import { AppointmentForm } from "@/components/AppointmentForm";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";
import { MobileActionBar } from "@/components/MobileActionBar";
import { clinic } from "@/data/clinic";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Smile Smith Dental Clinic | Dentist in Pathankot, Punjab" },
      {
        name: "description",
        content:
          "Looking for dental care in Pathankot? Contact Smile Smith Dental Clinic near Gandhi Chowk to enquire about dental services and appointments.",
      },
      {
        property: "og:title",
        content: "Smile Smith Dental Clinic | Dentist in Pathankot, Punjab",
      },
      {
        property: "og:description",
        content:
          "Thoughtful, patient-focused dental care near Gandhi Chowk, Pathankot. Enquire about appointments at Smile Smith Dental Clinic.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/clinic-logo.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/clinic-logo.jpg" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dentist",
          name: clinic.name,
          image: "/clinic-logo.jpg",
          logo: "/clinic-logo.jpg",
          telephone: clinic.phoneDisplay,
          address: {
            "@type": "PostalAddress",
            streetAddress: `${clinic.address.line1}, ${clinic.address.area}`,
            addressLocality: clinic.address.city,
            addressRegion: clinic.address.state,
            postalCode: clinic.address.postalCode,
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <Doctors />
        <Treatments />
        <MotionFeature />
        <WhyChooseUs />
        <Reviews />
        <AppointmentForm />
        <Location />
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  );
}
