"use client";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Contact us</h2>
          <p className="mt-3 text-slate-600">
            Reach out for collaboration, questions about the research, or portfolio feedback.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="space-y-6 rounded-2xl border border-blue-100 bg-blue-50/40 p-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Email</p>
              <a href="mailto:hello@example.com" className="mt-1 inline-block text-blue-700 hover:underline">
                hello@example.com
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Institution</p>
              <p className="mt-1 text-slate-800">Your university or organization</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Location</p>
              <p className="mt-1 text-slate-800">City, Country</p>
            </div>
          </div>

          <form
            className="space-y-4 rounded-2xl border border-blue-100 p-6"
            action="#"
            method="post"
            onSubmit={(e) => e.preventDefault()}
          >
            <p className="text-sm text-slate-600">
              This form is a layout placeholder. Wire it to your backend or a form service when ready.
            </p>
            <div>
              <label htmlFor="contact-name" className="text-sm font-medium text-slate-800">
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none ring-blue-600 focus:ring-2"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="text-sm font-medium text-slate-800">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none ring-blue-600 focus:ring-2"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="text-sm font-medium text-slate-800">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                className="mt-1 w-full resize-y rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none ring-blue-600 focus:ring-2"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 sm:w-auto"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
