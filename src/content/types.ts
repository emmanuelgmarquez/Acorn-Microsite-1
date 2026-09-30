/**
 * Shared content types. Every page reads from the files in `src/content/`,
 * so updating the site should never require touching a component.
 *
 * Placeholder convention: any string wrapped in square brackets, e.g.
 * "[Company name]", is treated as a placeholder. It renders with a dashed
 * highlight so it is easy to spot, is left out of SEO metadata, and is
 * reported by `npm run check:placeholders`.
 */

export type Link = {
  label: string;
  href: string;
};

export type Experience = {
  company: string;
  title: string;
  /** Free text so you can write "Mar 2022", "2022", etc. */
  start: string;
  /** Use "Present" for a current role. */
  end: string;
  location?: string;
  /** One-sentence summary of the role. */
  summary?: string;
  responsibilities: string[];
  accomplishments: string[];
  tools: string[];
};

export type SkillCategory = {
  id: string;
  name: string;
  /** One line explaining how you use this group of skills on the job. */
  description: string;
  skills: string[];
};

export type Screenshot = {
  /** Path under /public, e.g. "/projects/welcome-series/flow.png". */
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  title: string;
  /** One or two sentences shown on project cards. */
  summary: string;
  category: ProjectCategory;
  featured: boolean;
  /** Free text, e.g. "2024" or "Spring 2025". */
  date?: string;
  /** e.g. "Freelance", "Employer name", "Personal project". */
  context?: string;
  problem: string;
  role: string;
  whatIDid: string[];
  tools: string[];
  /** Leave empty to show a neutral "screenshot coming soon" frame. */
  screenshots: Screenshot[];
  results: string[];
  takeaways: string[];
  links?: Link[];
};

export type ProjectCategory =
  | "Email & Lifecycle"
  | "Marketing Automation"
  | "Web & WordPress"
  | "Front-End"
  | "Analytics"
  | "Digital Marketing";

export type Education = {
  school: string;
  credential: string;
  dates?: string;
  details?: string;
};

export type Certification = {
  name: string;
  issuer: string;
  date?: string;
  url?: string;
};
