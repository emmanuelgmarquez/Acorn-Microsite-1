import type { Certification, Education } from "./types";

/**
 * Résumé-only content. Work history comes from experience.ts and skills from
 * skills.ts, so you only edit those once.
 */
export const resumeSummary =
  "Email marketing specialist with 7+ years of experience owning lifecycle, triggered, promotional and transactional email programs across enterprise ESPs. Skilled in campaign operations, audience segmentation, personalization, journey automation, A/B testing, deliverability and performance reporting, backed by deep HTML/CSS email expertise and cross-functional partnership with marketing, CRM, analytics and creative teams.";

/** Leave empty to hide the section. */
export const education: Education[] = [];

/** Leave empty to hide the section. */
export const certifications: Certification[] = [];
