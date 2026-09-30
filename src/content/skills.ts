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
      "Planning, building and sending campaigns and keeping customer data clean.",
    skills: ["[ESP, e.g. the email platform you use]", "[CRM]", "[Skill]"],
  },
  {
    id: "automation",
    name: "Marketing Automation",
    description:
      "Triggered journeys, lead nurturing, segmentation and lifecycle programs.",
    skills: ["[Automation platform]", "[Skill]", "[Skill]"],
  },
  {
    id: "web-dev",
    name: "Web Development",
    description: "Hand-coded pages, email templates and front-end components.",
    skills: ["[Language or framework]", "[Skill]", "[Skill]"],
  },
  {
    id: "cms",
    name: "CMS",
    description: "Building, maintaining and publishing on content platforms.",
    skills: ["[CMS]", "[Page builder or theme]", "[Skill]"],
  },
  {
    id: "analytics",
    name: "Analytics",
    description: "Measuring what worked and reporting it in plain language.",
    skills: ["[Analytics tool]", "[Skill]"],
  },
  {
    id: "ai",
    name: "AI Tools",
    description: "Where AI speeds up research, drafting, QA or code.",
    skills: ["[AI tool]", "[How you use it]"],
  },
  {
    id: "design-content",
    name: "Design & Content",
    description: "Layouts, visuals and copy that support the campaign goal.",
    skills: ["[Design tool]", "[Skill]"],
  },
  {
    id: "platforms",
    name: "Platforms",
    description: "Other systems you have worked in day to day.",
    skills: ["[Platform]", "[Platform]"],
  },
];

/** A few headline skills for the home page. Leave empty to show categories only. */
export const topSkills: string[] = [
  "[Top skill]",
  "[Top skill]",
  "[Top skill]",
  "[Top skill]",
];
