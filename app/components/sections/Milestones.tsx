import { MILESTONES } from "@/app/lib/constants";

const STATUS_STYLES = {
  completed: "bg-emerald-100 text-emerald-800 border-emerald-200",
  "in progress": "bg-amber-100 text-amber-800 border-amber-200",
  pending: "bg-slate-100 text-slate-700 border-slate-200",
} as const;

export function Milestones() {
  return (
    <section id="milestones" className="scroll-mt-20 border-b border-blue-100 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl">
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
                className="absolute left-[25px] top-7 h-3.5 w-3.5 rounded-full border-2 border-blue-600 bg-white sm:left-[33px] lg:left-1/2 lg:-translate-x-1/2"
                aria-hidden
              />
              <div
                className={`ml-12 rounded-xl border border-blue-100 bg-white p-4 shadow-sm sm:ml-16 sm:p-5 lg:ml-0 lg:max-w-md ${
                  i % 2 === 0 ? "lg:mr-auto lg:w-full" : "lg:col-start-2 lg:ml-auto lg:w-full"
                }`}
              >
                <span
                  className={`absolute top-8 hidden h-0.5 w-8 bg-blue-200 lg:block ${
                    i % 2 === 0 ? "lg:left-[calc(50%-2rem)]" : "lg:left-1/2"
                  }`}
                  aria-hidden
                />
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
