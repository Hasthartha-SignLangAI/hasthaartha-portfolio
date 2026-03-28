const PLACEHOLDER_MEMBERS = [
  { name: "Team member", role: "Role / focus area" },
  { name: "Team member", role: "Role / focus area" },
  { name: "Team member", role: "Role / focus area" },
];

export function Team() {
  return (
    <section
      id="team"
      className="scroll-mt-20 border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
            The team
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400">
            Introduce supervisors, researchers, and contributors. Replace placeholders with names, photos, and short bios.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PLACEHOLDER_MEMBERS.map((m, idx) => (
            <li
              key={idx}
              className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6 dark:border-slate-800 dark:bg-slate-900/40"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 text-lg font-semibold text-teal-800 dark:bg-teal-950 dark:text-teal-200">
                {m.name.charAt(0)}
              </div>
              <p className="mt-4 font-semibold text-slate-900 dark:text-slate-50">{m.name}</p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{m.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
