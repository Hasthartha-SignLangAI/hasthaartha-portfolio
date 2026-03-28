export function HomeHero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-teal-50/80 to-white dark:border-slate-800 dark:from-teal-950/40 dark:to-slate-950"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgb(13 148 136 / 0.25), transparent 45%), radial-gradient(circle at 80% 0%, rgb(59 130 246 / 0.15), transparent 40%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        <p className="text-sm font-semibold uppercase tracking-widest text-teal-700 dark:text-teal-400">
          Research portfolio
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-slate-50">
          Documenting our research journey from scope to delivery
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          Explore the literature foundation, problem framing, methodology, milestones, and outcomes of our project.
          Replace this hero copy with your project title and a concise value proposition.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#project-scope"
            className="inline-flex items-center justify-center rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700"
          >
            View project scope
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-900"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
