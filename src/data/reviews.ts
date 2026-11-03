import { clinic } from "./clinic";

/**
 * Review summaries based on public Google reviews described in the clinic's
 * business listing. These are careful summaries — not presented as verbatim
 * quotations — and no reviewer names are shown since they are not confirmed.
 */
export interface ReviewSummary {
  title: string;
  summary: string;
  attribution: string;
}

export const reviewSummaries: ReviewSummary[] = [
  {
    title: "Gentle, comfortable care",
    summary:
      "A patient praised the gentle approach taken during a dental filling procedure, describing the experience as far more comfortable than expected.",
    attribution: "Google review summary",
  },
  {
    title: "Clear explanations and genuine care",
    summary:
      "Patients highlighted that treatments were explained clearly and that they were treated with care and attention throughout their visit.",
    attribution: "Google review summary",
  },
];

export const ratingLine = `${clinic.rating.value} ★ | ${clinic.rating.count} Google Reviews`;
