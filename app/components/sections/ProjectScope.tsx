import { PROJECT_SCOPE_SUBSECTIONS } from "@/app/lib/constants";

export function ProjectScope() {
  return (
    <section
      id="project-scope"
      className="scroll-mt-20 border-b border-blue-100 bg-gradient-to-b from-white to-blue-50/40"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">

        {/* HEADER */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
            Project Scope
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            A structured overview of the research foundation, objectives, and
            methodology behind the Hasthaartha system.
          </p>
        </div>

        {/* CONTENT */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[240px_1fr] lg:gap-14">

          {/* SIDEBAR */}
          <nav
            className="lg:sticky lg:top-24 lg:self-start"
            aria-label="Project scope subsections"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Overview
            </p>

            <ul className="mt-4 space-y-2 border-l border-blue-100 pl-4">
              {PROJECT_SCOPE_SUBSECTIONS.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="block text-sm text-slate-600 transition hover:text-blue-700 hover:translate-x-1"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* MAIN CONTENT */}
          <div className="space-y-12">
            {PROJECT_SCOPE_SUBSECTIONS.map((s) => (
              <article
                key={s.id}
                id={s.id}
                className="group scroll-mt-24 rounded-2xl border border-blue-100 bg-white p-6 sm:p-8 shadow-sm transition duration-300 hover:shadow-md hover:-translate-y-1"
              >
                {/* Title */}
                <h3 className="text-xl font-semibold text-slate-900 group-hover:text-blue-700 transition">
                  {s.title}
                </h3>

                {/* Divider */}
                <div className="mt-2 h-[2px] w-12 bg-blue-200 group-hover:bg-blue-500 transition" />

                {/* Body */}
                {s.id === "references" && Array.isArray(s.body) ? (
                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    {s.body.map((ref) => (
                      <li key={ref} className="leading-relaxed">
                        {ref}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-4 leading-relaxed text-slate-600">
                    {s.body}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}