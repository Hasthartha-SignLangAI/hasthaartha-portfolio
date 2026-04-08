import { PROJECT_SCOPE_SUBSECTIONS } from "@/app/lib/constants";

export function ProjectScope() {
  return (
    <section id="project-scope" className="scroll-mt-20 border-b border-blue-100 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Project scope</h2>
          <p className="mt-3 text-slate-600">
            A structured overview of the research foundation, aims, and how the work will be carried out.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[220px_1fr] lg:gap-12">
          <nav className="lg:sticky lg:top-24 lg:self-start" aria-label="Project scope subsections">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Jump to</p>
            <ul className="mt-3 space-y-1 border-l border-blue-100 pl-4">
              {PROJECT_SCOPE_SUBSECTIONS.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="block py-1 text-sm text-slate-600 hover:text-blue-700">
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
                className="scroll-mt-24 rounded-2xl border border-blue-100 bg-blue-50/40 p-6 sm:p-8"
              >
                <h3 className="text-xl font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
