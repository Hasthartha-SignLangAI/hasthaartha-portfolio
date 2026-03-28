const ACHIEVEMENTS = [
  {
    title: "Publication or preprint",
    description: "Summarize peer-reviewed output or technical reports tied to the project.",
  },
  {
    title: "Prototype or system",
    description: "Highlight demos, repositories, or deployed artifacts and what they demonstrate.",
  },
  {
    title: "Recognition",
    description: "Awards, presentations, or collaboration milestones worth highlighting.",
  },
];

export function ResearchAchievement() {
  return (
    <section
      id="research-achievement"
      className="scroll-mt-20 border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
            Research achievement
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400">
            Showcase measurable outcomes: papers, systems, datasets, or impact. Edit the cards below with your results.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {ACHIEVEMENTS.map((a) => (
            <li
              key={a.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/60"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{a.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
