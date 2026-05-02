"use client";

import { useState, useMemo } from "react";
import { PROJECT_SCOPE_SUBSECTIONS } from "@/app/lib/constants";
import { FaChevronRight } from "react-icons/fa6";

export function ProjectScope() {
  const [activeSectionId, setActiveSectionId] = useState<string>("literature-review");

  const activeSection = useMemo(() => 
    PROJECT_SCOPE_SUBSECTIONS.find(s => s.id === activeSectionId) || PROJECT_SCOPE_SUBSECTIONS[0]
  , [activeSectionId]);

  return (
    <section
      id="project-scope"
      className="scroll-mt-20 border-b border-blue-100 bg-gradient-to-b from-white to-blue-50/40"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">

        {/* HEADER */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
            Project Scope
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            A structured overview of the research foundation, objectives, and
            methodology behind the Hasthaartha system.
          </p>
        </div>

        {/* CONTENT AREA */}
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-12">

          {/* TOPIC BOXES (LEFT) */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
              Select a Topic
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {PROJECT_SCOPE_SUBSECTIONS.map((s) => {
                const isActive = s.id === activeSectionId;
                return (
                  <button
                    key={s.id}
                    onClick={() => setActiveSectionId(s.id)}
                    className={`group relative flex items-center justify-between rounded-xl border p-5 text-left transition-all duration-300 ${
                      isActive
                        ? "border-blue-500 bg-blue-50 shadow-md ring-1 ring-blue-500"
                        : "border-slate-200 bg-white hover:border-blue-300 hover:shadow-sm"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${isActive ? 'bg-blue-600 scale-125' : 'bg-slate-300 group-hover:bg-blue-400'}`} />
                      <span className={`text-sm font-semibold transition-colors duration-300 ${isActive ? 'text-blue-900' : 'text-slate-600 group-hover:text-blue-700'}`}>
                        {s.title}
                      </span>
                    </div>
                    <FaChevronRight className={`text-xs transition-all duration-300 ${isActive ? 'translate-x-1 text-blue-600' : 'opacity-0 -translate-x-2 text-slate-400 group-hover:opacity-100 group-hover:translate-x-0'}`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* DISPLAY AREA (RIGHT) */}
          <div className="relative min-h-[450px]">
            <div
              className="h-full rounded-3xl border border-blue-100 bg-white p-8 sm:p-12 shadow-xl shadow-blue-900/5 transition-all duration-500 flex flex-col"
            >
              {/* Content Header */}
              <div className="mb-8">
                <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-widest mb-2">
                  <span>Scope Detail</span>
                  <div className="h-[1px] w-8 bg-blue-200" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 tracking-tight">
                  {activeSection.title}
                </h3>
              </div>

              {/* Body */}
              <div className="flex-grow">
                {activeSection.id === "references" && Array.isArray(activeSection.body) ? (
                  <div className="space-y-4">
                    <p className="text-slate-500 italic text-sm mb-6">
                      Supporting research and citations for the Hasthaartha project.
                    </p>
                    <ul className="space-y-3">
                      {activeSection.body.map((ref, idx) => (
                        <li key={idx} className="flex gap-4 text-sm leading-relaxed text-slate-600 bg-slate-50/50 p-3 rounded-lg border border-slate-100/50">
                          <span>{ref}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="relative">
                    <p className="text-lg leading-relaxed text-slate-600">
                      {activeSection.body}
                    </p>
                  </div>
                )}
              </div>              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}