import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";
import { enquirySchema } from "./enquiry-schema";

export type EnquiryResult =
  | { ok: true }
  | { ok: false; fieldErrors?: Record<string, string>; message?: string };

/**
 * Public server function: accepts an appointment enquiry from anyone and
 * stores it. Validation happens here on the server (zod), and the insert runs
 * through a publishable client so only the anon INSERT policy applies.
 */
export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => input)
  .handler(async ({ data }): Promise<EnquiryResult> => {
    const parsed = enquirySchema.safeParse(data);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !fieldErrors[key]) {
          fieldErrors[key] = issue.message;
        }
      }
      return { ok: false, fieldErrors };
    }

    const value = parsed.data;
    // Honeypot filled in — pretend success without storing anything.
    if (value.website) return { ok: true };

    const url = process.env["SUPABASE_URL"];
    const key = process.env["SUPABASE_PUBLISHABLE_KEY"];
    if (!url || !key) {
      console.error("Supabase env vars missing for enquiry insert");
      return { ok: false, message: "The enquiry service is temporarily unavailable. Please call or WhatsApp us instead." };
    }

    const supabase = createClient<Database>(url, key, {
      auth: { persistSession: false },
      // Opaque sb_ keys are not JWTs: send apikey only, strip the default bearer.
      global: {
        fetch: (input, init) => {
          const h = new Headers(init?.headers);
          if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) {
            h.delete("Authorization");
          }
          h.set("apikey", key);
          return fetch(input, { ...init, headers: h });
        },
      },
    });

    const { error } = await supabase.from("appointment_enquiries").insert({
      name: value.name,
      phone: value.phone,
      preferred_date: value.preferredDate,
      preferred_time: value.preferredTime,
      treatment: value.treatment,
      message: value.message || null,
    });

    if (error) {
      console.error("Enquiry insert failed:", error.message);
      return { ok: false, message: "We couldn't save your enquiry just now. Please call or WhatsApp us instead." };
    }

    return { ok: true };
  });
