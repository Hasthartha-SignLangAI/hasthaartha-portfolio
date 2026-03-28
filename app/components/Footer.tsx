import { NAV_LINKS, SITE_NAME } from "@/app/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <p className="text-lg font-semibold text-slate-900 dark:text-slate-50">{SITE_NAME}</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Research portfolio documenting objectives, methodology, milestones, and outcomes.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-500">
              On this page
            </p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-teal-700 hover:underline dark:text-teal-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-slate-200 pt-8 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-500">
          © {year} {SITE_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
