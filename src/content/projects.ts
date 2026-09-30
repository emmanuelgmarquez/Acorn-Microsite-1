import type { Project } from "./types";

/**
 * Projects and case studies. Each one gets its own page at /projects/<slug>.
 *
 * - `slug` must be unique, lowercase and use hyphens (it becomes the URL).
 * - Set `featured: true` to show a project on the home page.
 * - Screenshots go in /public/projects/<slug>/ and are listed with their
 *   pixel width/height so they can be optimised and lazy-loaded.
 * - For client or employer work, blur or remove confidential data first.
 */
export const projects: Project[] = [
  {
    slug: "email-lifecycle-project",
    title: "[Email / lifecycle project title]",
    summary:
      "[One or two sentences: what it was and why it mattered. E.g. a welcome series, re-engagement program or newsletter redesign.]",
    category: "Email & Lifecycle",
    featured: true,
    date: "[Year]",
    context: "[Employer, client or personal project]",
    problem: "[What problem or goal kicked this off? Who was it for?]",
    role: "[Your role and what you personally owned.]",
    whatIDid: [
      "[Step or deliverable]",
      "[Step or deliverable]",
      "[Step or deliverable]",
    ],
    tools: ["[Tool]", "[Tool]"],
    screenshots: [],
    results: ["[Result — use real numbers only]"],
    takeaways: ["[What you learned or would do differently]"],
  },
  {
    slug: "wordpress-web-project",
    title: "[WordPress / website project title]",
    summary:
      "[One or two sentences: the site or page you built, and for whom.]",
    category: "Web & WordPress",
    featured: true,
    date: "[Year]",
    context: "[Employer, client or personal project]",
    problem: "[What problem or goal kicked this off?]",
    role: "[Your role and what you personally owned.]",
    whatIDid: ["[Step or deliverable]", "[Step or deliverable]"],
    tools: ["[Tool]", "[Tool]"],
    screenshots: [],
    results: ["[Result]"],
    takeaways: ["[Takeaway]"],
    links: [{ label: "[Live site]", href: "#" }],
  },
  {
    slug: "automation-analytics-project",
    title: "[Automation or analytics project title]",
    summary:
      "[One or two sentences: the journey, integration or report you built.]",
    category: "Marketing Automation",
    featured: true,
    date: "[Year]",
    context: "[Employer, client or personal project]",
    problem: "[What problem or goal kicked this off?]",
    role: "[Your role and what you personally owned.]",
    whatIDid: ["[Step or deliverable]", "[Step or deliverable]"],
    tools: ["[Tool]", "[Tool]"],
    screenshots: [],
    results: ["[Result]"],
    takeaways: ["[Takeaway]"],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const featuredProjects = projects.filter((project) => project.featured);
