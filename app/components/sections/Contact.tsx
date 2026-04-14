"use client";

import { FaBuildingColumns, FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-blue-100 bg-gradient-to-b from-white to-blue-50/30"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">

        {/* ===== HEADER ===== */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-slate-900">
            Contact Us
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Interested in collaboration, research discussions, or learning more about Hasthaartha? Feel free to reach out.
          </p>
        </div>

        {/* ===== CONTENT ===== */}
        <div className="mt-14 grid gap-10 lg:grid-cols-2">

          {/* ===== LEFT INFO CARD ===== */}
          <div className="relative overflow-hidden rounded-2xl border border-blue-100 bg-white p-8 shadow-sm">

            {/* subtle background glow */}
            <div className="absolute inset-0 bg-blue-100/20 blur-3xl opacity-30 pointer-events-none" />

            <div className="relative space-y-8">

              {/* Email */}
              <div className="flex items-start gap-3">
                <span className="mt-0.5 rounded-lg bg-blue-100 p-2 text-blue-700" aria-hidden>
                  <FaEnvelope className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Email
                  </p>
                  <a
                    href="mailto:hello@example.com"
                    className="mt-2 inline-block text-blue-700 font-medium hover:underline"
                  >
                    devminds603@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 rounded-lg bg-blue-100 p-2 text-blue-700" aria-hidden>
                  <FaPhone className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Contact Number
                  </p>
                  <p className="mt-2 text-slate-800 font-medium">
                    +94 71 081 6740
                  </p>
                </div>
              </div>

              {/* Institution */}
              <div className="flex items-start gap-3">
                <span className="mt-0.5 rounded-lg bg-blue-100 p-2 text-blue-700" aria-hidden>
                  <FaBuildingColumns className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Institution
                  </p>
                  <p className="mt-2 text-slate-800 font-medium">
                    Sri Lanka Institute of Information Technology (SLIIT)
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <span className="mt-0.5 rounded-lg bg-blue-100 p-2 text-blue-700" aria-hidden>
                  <FaLocationDot className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Location
                  </p>
                  <p className="mt-2 text-slate-800 font-medium">
                    Sri Lanka
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* ===== FORM ===== */}
          <form
            className="space-y-6 rounded-2xl border border-blue-100 bg-white p-8 shadow-sm"
            action="#"
            method="post"
            onSubmit={(e) => e.preventDefault()}
          >

            <p className="text-sm text-slate-500">
              Send us a message and we’ll get back to you soon.
            </p>

            {/* Name */}
            <div>
              <label htmlFor="contact-name" className="text-sm font-medium text-slate-800">
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="contact-email" className="text-sm font-medium text-slate-800">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="contact-message" className="text-sm font-medium text-slate-800">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                className="mt-2 w-full resize-y rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:scale-105"
            >
              Send Message
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}