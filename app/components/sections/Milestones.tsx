import { MILESTONES } from "@/app/lib/constants";

const STATUS_STYLES = {
  completed: "bg-emerald-100 text-emerald-800 border-emerald-200",
  "in progress": "bg-amber-100 text-amber-800 border-amber-200",
  pending: "bg-slate-100 text-slate-700 border-slate-200",
} as const;

const NODE_DOT_STYLES = {
  completed: "from-emerald-400 to-emerald-600 shadow-emerald-500/25",
  "in progress": "from-amber-400 to-amber-600 shadow-amber-500/25",
  pending: "from-slate-300 to-slate-500 shadow-slate-400/20",
} as const;

export function Milestones() {
  return (
    <section id="milestones" className="scroll-mt-20 border-b border-blue-100 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Milestones</h2>
          <p className="mt-3 text-slate-600">
            Track each checkpoint as a visual roadmap with date, task focus, and current progress status.
          </p>
        </div>

        <ol className="relative mt-12 rounded-2xl border border-blue-100 bg-blue-50/30 p-6 sm:p-8 lg:p-10">
          <span className="absolute bottom-8 left-8 top-8 w-0.5 bg-blue-200 sm:left-10 lg:left-1/2 lg:-translate-x-1/2" aria-hidden />
          {MILESTONES.map((milestone, i) => (
            <li key={`${milestone.date}-${milestone.topic}`} className="relative pb-8 last:pb-0 lg:grid lg:grid-cols-2 lg:gap-12">
              <span
                className="absolute left-[23px] top-6 z-10 flex h-6 w-6 items-center justify-center sm:left-[31px] lg:left-1/2 lg:-translate-x-1/2"
                aria-hidden
              >
                <span className="absolute inset-0 rounded-full bg-white shadow-[0_1px_3px_rgba(15,23,42,0.08)] ring-2 ring-blue-100/90 ring-offset-2 ring-offset-blue-50/30" />
                <span
                  className={`relative h-2.5 w-2.5 rounded-full bg-gradient-to-br shadow-[0_0_0_1px_rgba(255,255,255,0.8)_inset] ${NODE_DOT_STYLES[milestone.status]}`}
                />
              </span>
              <div
                className={`relative ml-12 rounded-xl border border-blue-100 bg-white p-4 shadow-sm sm:ml-16 sm:p-5 lg:ml-0 lg:max-w-md ${
                  i % 2 === 0 ? "lg:mr-auto lg:w-full" : "lg:col-start-2 lg:ml-auto lg:w-full"
                }`}
              >
                <span
                  className={`absolute top-8 z-0 hidden items-center lg:flex ${
                    i % 2 === 0
                      ? "right-0 translate-x-full flex-row"
                      : "left-0 -translate-x-full flex-row-reverse"
                  }`}
                  aria-hidden
                >
                  <span
                    className={`h-0.5 w-14 shrink-0 sm:w-16 ${
                      i % 2 === 0
                        ? "bg-gradient-to-r from-blue-200 to-blue-300"
                        : "bg-gradient-to-l from-blue-200 to-blue-300"
                    }`}
                  />
                  {i % 2 === 0 ? (
                    <span className="h-0 w-0 shrink-0 border-y-[4px] border-y-transparent border-l-[7px] border-l-blue-300" />
                  ) : (
                    <span className="h-0 w-0 shrink-0 border-y-[4px] border-y-transparent border-r-[7px] border-r-blue-300" />
                  )}
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">Step {i + 1}</p>
                  <span className="text-slate-300">|</span>
                  <p className="text-sm text-slate-600">{milestone.date}</p>
                  <span
                    className={`ml-auto rounded-full border px-2.5 py-1 text-xs font-semibold capitalize ${
                      STATUS_STYLES[milestone.status]
                    }`}
                  >
                    {milestone.status}
                  </span>
                </div>
                <p className="mt-2 text-lg font-semibold text-slate-900">{milestone.topic}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{milestone.task}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
