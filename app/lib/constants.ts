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

export const TEAM_MEMBERS = [
  {
    name: "Rakindu Marambe",
    role: "Wearable arm-band designer",
    description:
      "Rakindu has over 1 year of industry experience and is interested in the fields of enterprise application development and Internet of Things(IoT)",
    image: "/team/rakindu.jpeg",
    github: "https://github.com/RakinduM",
    linkedin: "https://www.linkedin.com/in/rakindu-marambe-694077276/",
  },
  {
    name: "James Sembukuttiarachchi",
    role: "Hybrid model trainer",
    description:
      "James has over 1 year of industry experience and interested in software development, automation workflows and and LLM technologies",
    image: "/team/avatar-placeholder.svg",
    github: "https://github.com/JamesSembukuttiarachchi",
    linkedin: "https://www.linkedin.com/in/jamessembukuttiarachchi/",
  },
  {
    name: "Amaya Fernando",
    role: "Edge mobile application developer and integrator",
    description:
      "Amaya has over 1 year of industry experience and is interested in the fields of Quality Engineering and AI technologies",
    image: "/team/Amaya.jpg",
    github: "https://github.com/amaya2509",
    linkedin: "https://www.linkedin.com/in/amayafernando25/",
  },
  {
    name: "Hiruni Fernando",
    role: "Personalization developer using Few Shot Learning",
    description:
      "Hiruni has nearly 1 year of industry experience and passionate about web development and project management",
    image: "/team/avatar-placeholder.svg",
    github: "https://github.com/fernandoMHSJ",
    linkedin: "https://www.linkedin.com/in/hiruni-fernandojudez/",
  },
  {
    name: "Dr. Kalpani Manathunga",
    role: "Supervisor | Head of Department",
    description:
      "Pioneer behind the idea and a leading academic in the field of software engineering with expertise in assistive and learning technologies",
    image: "/team/kalpani_madam.jpeg",
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/in/kalpani-manathunga-0046ba91/",
  },
  {
    name: "Mr. Jeewaka Perera",
    role: "Co-supervisor",
    description:
      "Senior lecturer with deep expertise in the field of software engineering technologies, machine learning, deep reinforcement learning and neural network architectures.",
    image: "/team/jeewaka_sir.jpeg",
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/in/jeewakaperera/",
  },
  {
    name: "Mr. Sanka Mohottala",
    role: "Academic Instructor",
    description:
      "Passionate interest about research and development in the intersection of science and engineering",
    image: "/team/sanka_sir.jpeg",
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/in/sankamohottala/",
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
