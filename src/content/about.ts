/**
 * About page copy. Each string in `story` is a paragraph.
 */
export const about = {
  heading: "Where marketing and building meet",
  story: [
    "I started out in 2019 as a contract and freelance email developer, building promotional, lifecycle and transactional campaigns across HubSpot, Oracle Responsys, Acoustic and Cordial, and working directly with designers to turn Figma and Photoshop creative into production-ready email.",
    "In 2021 I joined Socius Marketing as a Web & Email Developer, producing high-volume responsive campaigns for several client accounts on weekly deadlines. Later that year I moved to Snow Companies, where as Lead Email Developer I own Salesforce Marketing Cloud programs end to end: Journey Builder automation, SQL segmentation, AMPscript personalization, QA and post-send reporting.",
    "[What you're looking for next — the kind of role, team and problems you want to work on.]",
  ],

  /**
   * The overlap between your marketing and technical skills. Keep each point
   * concrete: something you have actually done.
   */
  overlap: {
    marketing: [
      "Lifecycle programs for onboarding, engagement and retention",
      "Audience segmentation and personalization strategy",
      "A/B testing subject lines, creative and send timing, and reporting what worked",
    ],
    technical: [
      "Hand-coded, responsive HTML/CSS email with dark mode and accessibility support",
      "SQL audience queries, Data Extensions and AMPscript in Salesforce Marketing Cloud",
      "JavaScript, jQuery, REST API integrations and Git",
    ],
    together: [
      "Turning audience strategy into Journey Builder automation that actually runs",
      "Troubleshooting segmentation, dynamic content and journey issues when a send goes wrong",
      "Reusable template and production libraries that make campaigns faster and more consistent",
    ],
  },

  /** Short principles for how you work. Delete any that don't ring true. */
  approach: [
    {
      title: "QA before every send",
      body: "Every deployment goes through rendering and accessibility checks in Litmus before it reaches an inbox.",
    },
    {
      title: "Build once, reuse everywhere",
      body: "Modular templates, production libraries and documentation keep builds consistent and repeatable across a team.",
    },
    {
      title: "Test, measure, iterate",
      body: "A/B tests and post-send reporting feed straight back into the next campaign.",
    },
  ],

  /** Optional. Leave empty to hide. */
  outsideWork: "",
};
