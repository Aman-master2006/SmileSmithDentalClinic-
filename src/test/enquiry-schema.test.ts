import { describe, expect, it } from "vitest";
import { enquirySchema } from "@/lib/enquiry-schema";
import { buildAppointmentWhatsAppUrl, clinic } from "@/data/clinic";

const valid = {
  name: "Priya Sharma",
  phone: "9876543210",
  preferredDate: "2026-11-05",
  preferredTime: "11:30 AM",
  treatment: "Dental Consultation",
  message: "",
  website: "",
};

describe("enquirySchema", () => {
  it("accepts a complete, well-formed enquiry", () => {
    const result = enquirySchema.safeParse(valid);
    expect(result.success).toBe(true);
  });

  it("rejects a phone number that is not a valid phone pattern", () => {
    const result = enquirySchema.safeParse({ ...valid, phone: "not-a-phone" });
    expect(result.success).toBe(false);
  });

  it("rejects a missing or too-short name", () => {
    const result = enquirySchema.safeParse({ ...valid, name: "A" });
    expect(result.success).toBe(false);
  });

  it("rejects a preferred date that is not a calendar date string", () => {
    const result = enquirySchema.safeParse({ ...valid, preferredDate: "tomorrow" });
    expect(result.success).toBe(false);
  });

  it("rejects a message longer than 1000 characters", () => {
    const result = enquirySchema.safeParse({ ...valid, message: "x".repeat(1001) });
    expect(result.success).toBe(false);
  });
});

describe("buildAppointmentWhatsAppUrl", () => {
  it("generates a WhatsApp link with clinic number and enquiry details", () => {
    const url = buildAppointmentWhatsAppUrl({
      name: "Priya Sharma",
      phone: "9876543210",
      preferredDate: "2026-11-05",
      preferredTime: "11:30 AM",
      treatment: "Teeth Cleaning",
      message: "First visit",
    });

    expect(url).toContain(`https://wa.me/${clinic.whatsappNumber}`);
    const decoded = decodeURIComponent(url);
    expect(decoded).toContain("Priya Sharma");
    expect(decoded).toContain("9876543210");
    expect(decoded).toContain("Teeth Cleaning");
    expect(decoded).toContain("2026-11-05");
    expect(decoded).toContain("11:30 AM");
    expect(decoded).toContain("First visit");
  });
});
