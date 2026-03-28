import { PROJECT_SCOPE_SUBSECTIONS } from "@/app/lib/constants";

export function ProjectScope() {
  return (
    <section
      id="project-scope"
      className="scroll-mt-20 border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
            Project scope
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400">
            A structured overview of the research foundation, aims, and how the work will be carried out.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[220px_1fr] lg:gap-12">
          <nav
            className="lg:sticky lg:top-24 lg:self-start"
            aria-label="Project scope subsections"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Jump to</p>
            <ul className="mt-3 space-y-1 border-l border-slate-200 pl-4 dark:border-slate-800">
              {PROJECT_SCOPE_SUBSECTIONS.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="block py-1 text-sm text-slate-600 hover:text-teal-700 dark:text-slate-400 dark:hover:text-teal-400"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-14">
            {PROJECT_SCOPE_SUBSECTIONS.map((s) => (
              <article
                key={s.id}
                id={s.id}
                className="scroll-mt-24 rounded-2xl border border-slate-200 bg-slate-50/60 p-6 sm:p-8 dark:border-slate-800 dark:bg-slate-900/40"
              >
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-400">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
