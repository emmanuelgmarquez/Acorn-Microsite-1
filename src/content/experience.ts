import type { Experience } from "./types";

/**
 * Work history, most recent first. Copy a block to add another role.
 * Tip: lead accomplishments with the outcome and include a number when you
 * have a real one ("Raised welcome-series click rate from X% to Y%").
 */
export const experience: Experience[] = [
  {
    company: "[Most recent company]",
    title: "[Job title]",
    start: "[Start month + year]",
    end: "Present",
    location: "[City / Remote]",
    summary: "[One sentence on the team you were on and what you owned.]",
    responsibilities: [
      "[Responsibility — e.g. the campaigns, programs or sites you ran]",
      "[Responsibility]",
      "[Responsibility]",
    ],
    accomplishments: [
      "[Accomplishment with a real result, if you have one]",
      "[Accomplishment]",
    ],
    tools: ["[Platform]", "[Platform]", "[Platform]"],
  },
  {
    company: "[Previous company]",
    title: "[Job title]",
    start: "[Start month + year]",
    end: "[End month + year]",
    location: "[City / Remote]",
    summary: "[One sentence on the team you were on and what you owned.]",
    responsibilities: ["[Responsibility]", "[Responsibility]"],
    accomplishments: ["[Accomplishment]"],
    tools: ["[Platform]", "[Platform]"],
  },
  {
    company: "[Earlier company]",
    title: "[Job title]",
    start: "[Start month + year]",
    end: "[End month + year]",
    location: "[City / Remote]",
    responsibilities: ["[Responsibility]", "[Responsibility]"],
    accomplishments: ["[Accomplishment]"],
    tools: ["[Platform]"],
  },
];
