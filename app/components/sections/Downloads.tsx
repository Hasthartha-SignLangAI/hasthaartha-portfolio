import { DOWNLOADS } from "@/app/lib/constants";
import { FaUser, FaUsers } from "react-icons/fa6";

type Audience = "Individual" | "Group" | "Both";

const AUDIENCE_STYLES = {
  Individual: "border-blue-200 bg-blue-100 text-blue-800",
  Group: "border-indigo-200 bg-indigo-100 text-indigo-800",
  Both: "border-purple-200 bg-purple-100 text-purple-800",
} as const;

function DownloadsList({
  title,
  items,
}: {
  title: string;
  items: ReadonlyArray<{ title: string; audience: Audience; href: string }>;
}) {
  return (
    <article className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm sm:p-8">
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <ul className="mt-6 space-y-3">
        {items.map((item) => (
          <li
            key={item.title}
            className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-blue-100 bg-blue-50/40 px-4 py-3"
          >
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:underline"
            >
              {item.title}
            </a>
            <span
              className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold tracking-wide ${
                AUDIENCE_STYLES[item.audience]
              }`}
            >
              {item.audience === "Individual" ? (
                <FaUser className="h-3 w-3" aria-hidden />
              ) : item.audience === "Group" ? (
                <FaUsers className="h-3 w-3" aria-hidden />
              ) : (
                <>
                  <FaUser className="h-3 w-3" aria-hidden />
                  <FaUsers className="h-3 w-3" aria-hidden />
                </>
              )}
              {item.audience}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function Downloads() {
  return (
    <section id="downloads" className="scroll-mt-20 border-b border-blue-100 bg-blue-50/30">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Downloads</h2>
          <p className="mt-3 text-slate-600">
            View links to project documents and presentation slide decks, tagged by audience as individual, group, or both.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <DownloadsList title="Documents" items={DOWNLOADS.documents} />
          <DownloadsList title="Presentations" items={DOWNLOADS.presentations} />
        </div>
      </div>
    </section>
  );
}
