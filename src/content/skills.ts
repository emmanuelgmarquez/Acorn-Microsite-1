import type { SkillCategory } from "./types";

/**
 * Skills grouped the way hiring managers scan for them. List only tools and
 * techniques you have genuinely used and could talk about in an interview.
 * Empty a category's `skills` array to hide that category.
 */
export const skillCategories: SkillCategory[] = [
  {
    id: "email-crm",
    name: "Email & CRM",
    description:
      "Planning, building and sending campaigns and keeping audience data clean.",
    skills: [
      "Campaign execution & operations",
      "Lifecycle & triggered messaging",
      "Promotional & transactional email",
      "Audience segmentation",
      "Data Extensions",
      "Dynamic content & personalization",
      "List hygiene",
    ],
  },
  {
    id: "automation",
    name: "Marketing Automation",
    description:
      "Triggered journeys, segmentation logic and lifecycle programs.",
    skills: [
      "Salesforce Marketing Cloud (SFMC)",
      "Journey Builder",
      "Onboarding, engagement & retention journeys",
      "SQL audience queries",
      "AMPscript",
      "REST API integrations",
    ],
  },
  {
    id: "web-dev",
    name: "Web Development",
    description: "Hand-coded, responsive email and front-end code.",
    skills: [
      "Responsive HTML/CSS",
      "Modular templates",
      "JavaScript",
      "jQuery",
      "Git",
    ],
  },
  {
    id: "qa",
    name: "QA & Production",
    description: "Making sure every send renders, reads and works everywhere.",
    skills: [
      "Litmus",
      "Email on Acid",
      "Cross-client testing",
      "Accessibility",
      "Dark mode support",
    ],
  },
  {
    id: "analytics",
    name: "Analytics & Deliverability",
    description: "Measuring what worked and keeping mail in the inbox.",
    skills: [
      "Campaign reporting & KPIs",
      "Open / click / conversion analysis",
      "A/B & multivariate testing",
      "Deliverability & inbox placement",
      "Authentication (SPF, DKIM, DMARC)",
    ],
  },
  {
    id: "cms",
    name: "CMS",
    description: "Building, maintaining and publishing on content platforms.",
    skills: ["[CMS, e.g. WordPress — only if you've used it]"],
  },
  {
    id: "ai",
    name: "AI Tools",
    description: "Where AI speeds up research, drafting, QA or code.",
    skills: ["[AI tool and how you use it]"],
  },
  {
    id: "design-content",
    name: "Design & Content",
    description: "Turning creative into production-ready builds.",
    skills: ["Figma", "Photoshop", "Illustrator"],
  },
  {
    id: "platforms",
    name: "Platforms",
    description: "ESPs and marketing platforms used in production.",
    skills: [
      "Salesforce Marketing Cloud",
      "HubSpot",
      "Oracle Responsys",
      "Acoustic",
      "Cordial",
    ],
  },
];

/** A few headline skills for the home page. Leave empty to show categories only. */
export const topSkills: string[] = [
  "Salesforce Marketing Cloud & Journey Builder",
  "Lifecycle & triggered email programs",
  "SQL segmentation & AMPscript personalization",
  "Responsive HTML/CSS email development",
  "QA, deliverability & A/B testing",
];
