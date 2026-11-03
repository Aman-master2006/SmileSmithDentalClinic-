/**
 * Single source of truth for verified clinic details.
 * Update values here when the clinic confirms new information.
 */
export const clinic = {
  name: "Smile Smith Dental Clinic",
  shortName: "Smile Smith",
  address: {
    line1: "Dalhousie Road, near Ashoka Medical Store",
    area: "Gandhi Chowk",
    city: "Pathankot",
    state: "Punjab",
    postalCode: "145001",
    country: "India",
    get full() {
      return `${this.line1}, ${this.area}, ${this.city}, ${this.state} ${this.postalCode}, ${this.country}`;
    },
  },
  phoneDisplay: "+91 75089 79900",
  phoneDial: "+917508979900",
  whatsappNumber: "917508979900",
  whatsappPrefill:
    "Hello Smile Smith Dental Clinic, I would like to enquire about an appointment. Please share your available timings.",
  rating: {
    value: "5.0",
    count: 56,
    source: "Google Reviews",
  },
  // Search-based links: no fabricated map embed or profile URL until the
  // clinic's exact coordinates / Google Business Profile link are confirmed.
  mapsDirectionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    "Smile Smith Dental Clinic, Dalhousie Road, near Ashoka Medical Store, Gandhi Chowk, Pathankot, Punjab 145001, India",
  )}`,
  googleReviewsUrl: `https://www.google.com/maps/search/${encodeURIComponent(
    "Smile Smith Dental Clinic, Gandhi Chowk, Pathankot",
  )}`,
} as const;

export const whatsappUrl = `https://wa.me/${clinic.whatsappNumber}?text=${encodeURIComponent(
  clinic.whatsappPrefill,
)}`;

export const telUrl = `tel:${clinic.phoneDial}`;

export type AppointmentEnquiryData = {
  name: string;
  phone: string;
  treatment: string;
  preferredDate: string;
  preferredTime: string;
  message?: string;
};

export function buildAppointmentWhatsAppUrl(details: AppointmentEnquiryData): string {
  const lines = [
    `Hello ${clinic.name}, I would like to request an appointment:`,
    ``,
    `*Name:* ${details.name.trim()}`,
    `*Phone:* ${details.phone.trim()}`,
    `*Treatment:* ${details.treatment.trim()}`,
    `*Preferred Date:* ${details.preferredDate.trim()}`,
    `*Preferred Time:* ${details.preferredTime.trim()}`,
  ];

  if (details.message && details.message.trim()) {
    lines.push(`*Notes/Message:* ${details.message.trim()}`);
  }

  return `https://wa.me/${clinic.whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
}

/** Items confirmed verifiable from the supplied business listing. */
export const trustItems = [
  "Patient-focused consultations",
  "Clear treatment explanations",
  "Convenient Pathankot location",
  "Friendly, welcoming environment",
] as const;
