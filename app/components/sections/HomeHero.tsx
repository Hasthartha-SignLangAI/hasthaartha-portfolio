export function HomeHero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-b from-blue-50/80 to-white"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgb(59 130 246 / 0.2), transparent 45%), radial-gradient(circle at 80% 0%, rgb(147 197 253 / 0.2), transparent 40%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">Research portfolio</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Documenting our research journey from scope to delivery
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
          Explore the literature foundation, problem framing, methodology, milestones, and outcomes of our
          project. Replace this hero copy with your project title and a concise value proposition.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#project-scope"
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            View project scope
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-blue-50"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
