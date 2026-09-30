import type { Certification, Education } from "./types";

/**
 * Résumé-only content. Work history comes from experience.ts and skills from
 * skills.ts, so you only edit those once.
 */
export const resumeSummary =
  "[2–3 sentence professional summary written for the roles you are applying to.]";

export const education: Education[] = [
  {
    school: "[School or program]",
    credential: "[Degree, diploma or course]",
    dates: "[Years]",
    details: "",
  },
];

/** Leave empty to hide the section. */
export const certifications: Certification[] = [
  { name: "[Certification]", issuer: "[Issuer]", date: "[Year]" },
];
