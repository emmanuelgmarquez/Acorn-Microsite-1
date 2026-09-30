/**
 * Global site settings: your name, contact details and positioning.
 * Replace anything in [square brackets] with your own information.
 */

export const site = {
  name: "Emmanuel G. Marquez",
  /** Short version used in the header, e.g. first name + last initial. */
  shortName: "Emmanuel Marquez",
  /** Shown in the hero. Keep it specific to the roles you want. */
  headline: "I build and run the email programs that keep customers engaged.",
  /** 1–2 sentences under the headline. */
  intro:
    "Email marketing specialist with 7+ years owning lifecycle, triggered, promotional and transactional email across enterprise ESPs — from Journey Builder automation and SQL segmentation to hand-coded, fully tested HTML email.",
  /** Used in SEO descriptions and the social share image. */
  description:
    "Emmanuel G. Marquez — email marketing specialist and lead email developer working across lifecycle, CRM and marketing automation (Salesforce Marketing Cloud, Journey Builder, SQL, AMPscript) and responsive HTML/CSS.",
  /** Your current title or the title you are targeting. */
  role: "Email Marketing Specialist · Lifecycle, CRM & Marketing Automation",
  location: "Saratoga Springs, UT",
  /** Set to "" to hide the availability badge. */
  availability: "Open to new roles",

  email: "emmanuelg.marquez@gmail.com",
  linkedin: "https://www.linkedin.com/in/emmanuelgmarquez",
  /** Set to "" if you'd rather not link a GitHub profile. */
  github: "",

  /** The PDF in /public that the "Download résumé" buttons link to. */
  resumePdf: "/Emmanuel-Marquez-Resume.pdf",

  /**
   * Public URL of the deployed site. Used for canonical URLs, the sitemap
   * and Open Graph tags. Set NEXT_PUBLIC_SITE_URL in your hosting provider.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://emmanuelgmarquez.com",

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
