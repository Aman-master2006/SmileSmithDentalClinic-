import { z } from "zod";

export const enquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(100, "Name is too long."),
  phone: z
    .string()
    .trim()
    .regex(/^\+?[0-9][0-9\s\-()]{6,17}$/, "Please enter a valid phone number."),
  preferredDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Please choose a preferred date."),
  preferredTime: z
    .string()
    .trim()
    .min(1, "Please enter a preferred time.")
    .max(30, "Please keep this short, e.g. “11:30 AM”."),
  treatment: z
    .string()
    .trim()
    .min(1, "Please choose a treatment or “Not sure yet”.")
    .max(80),
  message: z.string().trim().max(1000, "Message is too long.").optional().default(""),
  // Honeypot: real visitors never see or fill this field.
  website: z.string().optional().default(""),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;
