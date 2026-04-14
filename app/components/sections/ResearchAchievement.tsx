import { ACHIEVEMENTS } from "@/app/lib/constants";

export function ResearchAchievement() {
  const { featured, secondary } = ACHIEVEMENTS;

  return (
    <section
      id="research-achievement"
      className="scroll-mt-20 border-b border-blue-100 bg-gradient-to-b from-blue-50/30 to-white"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">

        {/* ===== HEADER ===== */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold text-slate-900">
            Research Achievements
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Key milestones and recognitions achieved throughout the project.
          </p>
        </div>

        {/* ===== FEATURED (MAIN CARD) ===== */}
        <div className="mt-14 relative overflow-hidden rounded-2xl border border-green-200 bg-white p-8 shadow-sm transition hover:shadow-md">

          {/* subtle glow */}
          <div className="absolute inset-0 bg-green-100/20 blur-3xl opacity-30 pointer-events-none" />

          <div className="relative">

            {/* Badge */}
            <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              {featured.status}
            </span>

            {/* Title */}
            <h3 className="mt-6 text-2xl font-semibold text-slate-900">
              {featured.title}
            </h3>

            {/* Subtitle */}
            <p className="mt-3 text-slate-600 max-w-2xl">
              {featured.subtitle}
            </p>

            {/* Paper Info */}
            <div className="mt-8 border-t border-blue-100 pt-6">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Paper Details
              </h4>

              <p className="mt-3 text-slate-700">
                <span className="font-medium">Paper ID:</span> {featured.paper.id}
              </p>

              <p className="mt-1 text-slate-700 leading-relaxed">
                <span className="font-medium">Title:</span> {featured.paper.title}
              </p>
            </div>

            {/* Details Grid */}
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {featured.details.map((d) => (
                <div
                  key={d.title}
                  className="group rounded-xl border border-blue-100 bg-blue-50/40 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-200"
                >
                  <h5 className="font-semibold text-slate-900 group-hover:text-blue-700 transition">
                    {d.title}
                  </h5>

                  {d.title === "Website" ? (
                    <a
                      href={d.desc}
                      target="_blank"
                      className="mt-2 block text-blue-600 hover:underline break-all"
                    >
                      {d.desc}
                    </a>
                  ) : (
                    <p className="mt-2 text-slate-600 leading-relaxed">
                      {d.desc}
                    </p>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* ===== SECONDARY (CARDS) ===== */}
        <div className="mt-14 space-y-6">
          {secondary.map((item) => (
            <div
              key={item.title}
              className="group w-full flex flex-col rounded-2xl border border-blue-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-200"
            >
              {/* Badge (auto width stays same) */}
              <span className="inline-block w-fit rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                {item.status}
              </span>

              <h4 className="mt-6 text-lg font-semibold text-slate-900 group-hover:text-blue-700 transition">
                {item.title}
              </h4>

              <p className="mt-2 text-sm leading-relaxed text-slate-600 max-w-2xl">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}