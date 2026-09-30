/**
 * Global site settings: your name, contact details and positioning.
 * Replace anything in [square brackets] with your own information.
 */

export const site = {
  name: "[Your Name]",
  /** Short version used in the header, e.g. first name + last initial. */
  shortName: "[Your Name]",
  /** Shown in the hero. Keep it specific to the roles you want. */
  headline: "Email, lifecycle and web marketer who can also build the thing.",
  /** 1–2 sentences under the headline. */
  intro:
    "[Write 1–2 sentences about what you do. For example: which channels you work in, the kind of teams you support, and what you are known for.]",
  /** Used in SEO descriptions and the social share image. */
  description:
    "Portfolio and résumé for a marketer working across email, CRM and lifecycle marketing, marketing automation, WordPress and front-end web development.",
  /** Your current title or the title you are targeting. */
  role: "Email & Lifecycle Marketing · Marketing Automation · Web",
  location: "[City, State / Remote]",
  /** Set to "" to hide the availability badge. */
  availability: "Open to new roles",

  email: "[you@example.com]",
  linkedin: "[https://www.linkedin.com/in/your-profile]",
  /** Set to "" if you'd rather not link a GitHub profile. */
  github: "[https://github.com/your-username]",

  /** Drop your PDF at public/resume.pdf (or change this path). */
  resumePdf: "/resume.pdf",

  /**
   * Public URL of the deployed site. Used for canonical URLs, the sitemap
   * and Open Graph tags. Set NEXT_PUBLIC_SITE_URL in your hosting provider.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  /**
   * Optional form backend (e.g. a Formspree endpoint such as
   * https://formspree.io/f/abcdwxyz). When unset, the contact form opens the
   * visitor's email app with the message pre-filled instead.
   */
  formEndpoint: process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT ?? "",

  /** The kinds of roles you are targeting, shown on the home page. */
  targetRoles: [
    "Email Marketing",
    "CRM / Lifecycle Marketing",
    "Marketing Automation",
    "Web / WordPress",
    "Junior Front-End Development",
    "Digital Marketing",
  ],
};

export const navigation = [
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Résumé", href: "/resume" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
