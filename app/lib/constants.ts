export const SITE_NAME = "Hasthaartha";

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#project-scope", label: "Project Scope" },
  { href: "#milestones", label: "Milestones" },
  { href: "#team", label: "The Team" },
  { href: "#research-achievement", label: "Research Achievement" },
  { href: "#contact", label: "Contact Us" },
] as const;

export const MILESTONES = [
  "Project Initiation",
  "Topic Assessment Submission",
  "Proposal presentation",
  "Progress Presentation 1",
  "Progress Presentation 2",
  "Research Paper Submission",
  "Completion of Full System",
  "Portfolio Launch",
  "Final Presentation",
] as const;

export const PROJECT_SCOPE_SUBSECTIONS = [
  {
    id: "literature-review",
    title: "Literature Review",
    body:
      "Summarize prior work and situate your study within the existing body of knowledge. Replace this text with your synthesis of key sources and themes.",
  },
  {
    id: "research-gap",
    title: "Research Gap",
    body:
      "Describe what remains unaddressed in the literature and why it matters. This anchors the need for your project.",
  },
  {
    id: "research-problem-solution",
    title: "Research Problem and Solution",
    body:
      "State the problem clearly and outline the proposed solution or approach at a high level.",
  },
  {
    id: "research-objectives",
    title: "Research Objectives",
    body:
      "List specific, measurable objectives that your research aims to achieve.",
  },
  {
    id: "methodology",
    title: "Methodology",
    body:
      "Explain how you will investigate the problem: design, data collection, analysis, and validation.",
  },
  {
    id: "technologies",
    title: "Technologies",
    body:
      "List tools, frameworks, platforms, and languages used to implement and evaluate your work.",
  },
  {
    id: "references",
    title: "References",
    body:
      "Cite key publications in a consistent style. You can replace this block with a formatted bibliography.",
  },
] as const;
