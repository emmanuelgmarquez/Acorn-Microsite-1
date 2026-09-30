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
    slug: "sfmc-lifecycle-journeys",
    title: "Lifecycle & triggered journeys in Salesforce Marketing Cloud",
    summary:
      "Journey Builder programs for onboarding, engagement and retention, powered by SQL segmentation and AMPscript personalization.",
    category: "Marketing Automation",
    featured: true,
    date: "2021 – present",
    context: "Snow Companies",
    problem:
      "[What the program needed to achieve and for which audience — e.g. what onboarding or retention looked like before these journeys.]",
    role: "Lead Email Developer — owned execution from technical requirements through deployment, QA and post-send reporting.",
    whatIDid: [
      "Architected Journey Builder lifecycle and triggered messaging across multiple concurrent programs.",
      "Wrote SQL audience queries and managed Data Extensions to drive segmentation.",
      "Built personalization and dynamic content with AMPscript.",
      "Ran A/B tests on subject lines, creative and send timing and reported results to stakeholders.",
      "Led pre-deployment QA in Litmus.",
    ],
    tools: [
      "Salesforce Marketing Cloud",
      "Journey Builder",
      "SQL",
      "AMPscript",
      "Litmus",
    ],
    screenshots: [],
    results: [
      "[Add a real result — e.g. change in open, click or conversion rate, or programs launched]",
    ],
    takeaways: ["[What you learned or would do differently]"],
  },
  {
    slug: "responsive-email-template-library",
    title: "Reusable responsive email template library",
    summary:
      "A modular template library that sped up production and standardized rendering across client accounts.",
    category: "Email & Lifecycle",
    featured: true,
    date: "2021",
    context: "Socius Marketing",
    problem:
      "Producing high-volume responsive email campaigns for multiple concurrent client accounts on recurring weekly deadlines.",
    role: "Web & Email Developer — built the library and ran QA on every deployment.",
    whatIDid: [
      "Built a reusable library of responsive, modular email templates.",
      "Standardized cross-client compatibility and mobile responsiveness.",
      "Ran rendering and accessibility QA in Litmus before every send.",
      "Reported campaign performance to marketing and analytics teams to guide template and content improvements.",
    ],
    tools: ["HTML/CSS", "Responsive email", "Litmus"],
    screenshots: [],
    results: [
      "Shortened production time per campaign.",
      "[Add a number if you have one — e.g. hours saved per build]",
    ],
    takeaways: ["[What you learned or would do differently]"],
  },
  {
    slug: "multi-esp-email-production",
    title: "Multi-ESP email production for freelance clients",
    summary:
      "Promotional, lifecycle and transactional campaigns across HubSpot, Oracle Responsys, Acoustic and Cordial.",
    category: "Email & Lifecycle",
    featured: true,
    date: "2019 – 2021",
    context: "Independent (contract & freelance)",
    problem:
      "[What clients needed — e.g. the types of businesses and the campaigns they came to you for.]",
    role: "Email Developer — partnered directly with designers and owned builds and QA.",
    whatIDid: [
      "Translated Figma and Photoshop creative into pixel-accurate, production-ready campaigns.",
      "Implemented dynamic personalization, modular components, animation and dark mode support.",
      "Standardized templates and QA workflows across accounts.",
    ],
    tools: ["HubSpot", "Oracle Responsys", "Acoustic", "Cordial", "Figma", "Photoshop"],
    screenshots: [],
    results: ["Reduced average campaign turnaround time."],
    takeaways: ["[What you learned or would do differently]"],
  },
  {
    slug: "wordpress-web-project",
    title: "[WordPress / website project title]",
    summary:
      "[One or two sentences: the site or page you built, and for whom. Delete this project if you don't have one yet.]",
    category: "Web & WordPress",
    featured: false,
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
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const featuredProjects = projects.filter((project) => project.featured);
