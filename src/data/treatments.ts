import treatmentConsultation from "@/assets/treatment-consultation.jpg";
import treatmentCleaning from "@/assets/treatment-cleaning.jpg";
import treatmentFilling from "@/assets/treatment-filling.jpg";
import treatmentRootCanal from "@/assets/treatment-rootcanal.jpg";
import treatmentExtraction from "@/assets/treatment-extraction.jpg";
import treatmentWhitening from "@/assets/treatment-whitening.jpg";
import treatmentBraces from "@/assets/treatment-braces.jpg";
import treatmentCrowns from "@/assets/treatment-crowns.jpg";

/**
 * Suggested treatment list — the clinic must confirm which services it
 * actually provides before these cards are treated as final. Copy avoids
 * claiming any treatment is painless, risk-free, permanent or guaranteed.
 */
export interface Treatment {
  slug: string;
  name: string;
  description: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
}

export const treatments: Treatment[] = [
  {
    slug: "consultation",
    name: "Dental Consultation",
    description:
      "A thorough discussion of your dental concerns, with clear explanations to help you understand your options.",
    image: treatmentConsultation,
    imageWidth: 992,
    imageHeight: 672,
  },
  {
    slug: "cleaning",
    name: "Teeth Cleaning & Scaling",
    description:
      "Professional cleaning to remove plaque and tartar build-up and support your everyday oral hygiene.",
    image: treatmentCleaning,
    imageWidth: 992,
    imageHeight: 672,
  },
  {
    slug: "fillings",
    name: "Dental Fillings",
    description:
      "Restorative care for cavities, using filling materials selected to suit your tooth and situation.",
    image: treatmentFilling,
    imageWidth: 992,
    imageHeight: 672,
  },
  {
    slug: "root-canal",
    name: "Root Canal Treatment",
    description:
      "Treatment for infected or damaged tooth pulp, aimed at relieving discomfort and saving the natural tooth.",
    image: treatmentRootCanal,
    imageWidth: 992,
    imageHeight: 672,
  },
  {
    slug: "extraction",
    name: "Tooth Extraction",
    description:
      "Careful removal of a tooth when it cannot be preserved, with aftercare guidance for a comfortable recovery.",
    image: treatmentExtraction,
    imageWidth: 992,
    imageHeight: 672,
  },
  {
    slug: "whitening",
    name: "Teeth Whitening",
    description:
      "Whitening options to brighten your smile — discussed and tailored to your teeth during a consultation.",
    image: treatmentWhitening,
    imageWidth: 992,
    imageHeight: 672,
  },
  {
    slug: "braces",
    name: "Braces & Orthodontics",
    description:
      "Orthodontic treatment to align teeth and bites, planned around your individual needs and timeline.",
    image: treatmentBraces,
    imageWidth: 992,
    imageHeight: 672,
  },
  {
    slug: "crowns-bridges",
    name: "Crowns & Bridges",
    description:
      "Custom restorations to protect a damaged tooth or replace missing teeth and restore your bite.",
    image: treatmentCrowns,
    imageWidth: 992,
    imageHeight: 672,
  },
];
