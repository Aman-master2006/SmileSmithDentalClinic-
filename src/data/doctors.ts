import drSurvinderImage from "@/assets/doctor-survinder-singh-batth.jpg";
import drSophiyaImage from "@/assets/doctor-sophiya-batth.jpg";
import { clinic } from "./clinic";

export interface Doctor {
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  image: string;
  imageAlt: string;
  highlights: string[];
  whatsappUrl: string;
}

export const doctors: Doctor[] = [
  {
    id: "dr-survinder-singh-batth",
    name: "Dr. Survinder Singh Batth",
    role: "Dental Surgeon",
    specialty: "Comprehensive & Restorative Dentistry",
    bio: "Dedicated to thoughtful diagnosis, clear patient communication, and comprehensive dental treatments tailored to each individual.",
    image: drSurvinderImage,
    imageAlt: "Dr. Survinder Singh Batth - Dental Surgeon at Smile Smith Dental Clinic",
    highlights: ["Patient-Centered Care", "Restorative Treatments", "Clear Consultations"],
    whatsappUrl: `https://wa.me/${clinic.whatsappNumber}?text=${encodeURIComponent(
      `Hello ${clinic.name}, I would like to enquire about a consultation with Dr. Survinder Singh Batth.`,
    )}`,
  },
  {
    id: "dr-sophiya-batth",
    name: "Dr. Sophiya Batth",
    role: "Dental Surgeon",
    specialty: "Aesthetic & Family Dental Care",
    bio: "Passionate about gentle dental care, patient comfort, and preventative treatments that help individuals and families maintain healthy smiles.",
    image: drSophiyaImage,
    imageAlt: "Dr. Sophiya Batth - Dental Surgeon at Smile Smith Dental Clinic",
    highlights: ["Gentle Approach", "Smile & Aesthetic Care", "Family Dental Health"],
    whatsappUrl: `https://wa.me/${clinic.whatsappNumber}?text=${encodeURIComponent(
      `Hello ${clinic.name}, I would like to enquire about a consultation with Dr. Sophiya Batth.`,
    )}`,
  },
];

