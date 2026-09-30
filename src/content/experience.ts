import type { Experience } from "./types";

/**
 * Work history, most recent first. Copy a block to add another role.
 * Tip: lead accomplishments with the outcome and include a number when you
 * have a real one ("Raised welcome-series click rate from X% to Y%").
 */
export const experience: Experience[] = [
  {
    company: "Snow Companies",
    title: "Lead Email Developer",
    start: "Oct 2021",
    end: "Present",
    summary:
      "Own end-to-end execution of Salesforce Marketing Cloud email programs, from technical requirements through deployment, QA and post-send reporting.",
    responsibilities: [
      "Architect Journey Builder lifecycle and triggered messaging supporting onboarding, engagement and retention across multiple concurrent programs.",
      "Write SQL audience queries and manage Data Extensions to power segmentation for personalized, data-driven customer messaging.",
      "Troubleshoot complex SFMC issues spanning AMPscript, dynamic content, segmentation and Journey Builder execution, and lead pre-deployment QA in Litmus.",
      "Partner with marketing, CRM, analytics and creative stakeholders to align execution with audience strategy, brand standards and technical constraints.",
    ],
    accomplishments: [
      "Run A/B tests on subject lines, creative and send timing, reporting results to stakeholders and applying findings to improve open, click and conversion performance.",
      "Maintain documentation and reusable production libraries that keep campaign builds consistent and repeatable across the team.",
    ],
    tools: [
      "Salesforce Marketing Cloud",
      "Journey Builder",
      "SQL",
      "Data Extensions",
      "AMPscript",
      "Litmus",
    ],
  },
  {
    company: "Socius Marketing",
    title: "Web & Email Developer",
    start: "Jan 2021",
    end: "Oct 2021",
    summary:
      "Produced high-volume responsive email campaigns for multiple concurrent client accounts under recurring weekly deadlines.",
    responsibilities: [
      "Managed campaign QA in Litmus, including rendering and accessibility checks, before every deployment.",
      "Tracked campaign performance and reported results to marketing and analytics teams to guide ongoing template and content improvements.",
    ],
    accomplishments: [
      "Built a reusable template library that shortened production time per campaign and standardized cross-client compatibility and mobile responsiveness.",
    ],
    tools: ["HTML/CSS", "Responsive email", "Litmus"],
  },
  {
    company: "Independent",
    title: "Email Developer (Contract & Freelance)",
    start: "Jan 2019",
    end: "Jan 2021",
    summary:
      "Delivered promotional, lifecycle and transactional campaigns across multiple ESPs for a range of accounts.",
    responsibilities: [
      "Implemented dynamic personalization, modular components, animation and dark mode support in production email builds.",
      "Partnered directly with designers to translate Figma and Photoshop creative into pixel-accurate, production-ready campaigns.",
    ],
    accomplishments: [
      "Standardized templates and QA workflows across accounts, reducing average campaign turnaround time.",
    ],
    tools: ["HubSpot", "Oracle Responsys", "Acoustic", "Cordial", "Figma", "Photoshop"],
  },
];
