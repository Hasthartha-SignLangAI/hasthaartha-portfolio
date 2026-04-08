import { MILESTONES } from "@/app/lib/constants";

export function Milestones() {
  return (
    <section id="milestones" className="scroll-mt-20 border-b border-blue-100 bg-blue-50/30">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Milestones</h2>
          <p className="mt-3 text-slate-600">
            Key checkpoints from initiation through final presentation. Add dates or status as your project
            progresses.
          </p>
        </div>

        <ol className="relative mt-12 max-w-3xl border-l-2 border-blue-200 pl-8">
          {MILESTONES.map((label, i) => (
            <li key={label} className="relative pb-12 last:pb-0">
              <span
                className="absolute -left-[9px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-blue-600 bg-white"
                aria-hidden
              />
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">Step {i + 1}</p>
              <p className="mt-1 text-lg font-medium text-slate-900">{label}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
