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
  {
    date: "2026-01-10",
    topic: "Project Initiation",
    task: "Finalize team roles, project scope, and initial timeline.",
    status: "completed",
  },
  {
    date: "2026-02-05",
    topic: "Topic Assessment Submission",
    task: "Submit approved topic rationale with problem statement.",
    status: "completed",
  },
  {
    date: "2026-03-01",
    topic: "Proposal Presentation",
    task: "Present methodology, objectives, and expected outcomes.",
    status: "in progress",
  },
  {
    date: "2026-04-12",
    topic: "Progress Presentation 1",
    task: "Demonstrate core module implementation and early results.",
    status: "pending",
  },
  {
    date: "2026-05-24",
    topic: "Progress Presentation 2",
    task: "Show integrated system progress and validation updates.",
    status: "pending",
  },
  {
    date: "2026-06-28",
    topic: "Research Paper Submission",
    task: "Submit manuscript with findings and references.",
    status: "pending",
  },
  {
    date: "2026-07-30",
    topic: "Completion of Full System",
    task: "Complete all features, testing, and documentation.",
    status: "pending",
  },
  {
    date: "2026-08-14",
    topic: "Portfolio Launch",
    task: "Publish final portfolio with artifacts and highlights.",
    status: "pending",
  },
  {
    date: "2026-08-28",
    topic: "Final Presentation",
    task: "Deliver final defense and demonstrate full project impact.",
    status: "pending",
  },
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
