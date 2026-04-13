import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import { TEAM_MEMBERS } from "@/app/lib/constants";

export function Team() {
  const members = TEAM_MEMBERS.slice(0, 4);
  const supervisors = TEAM_MEMBERS.slice(4, 7);

  return (
    <section id="team" className="scroll-mt-20 border-b border-blue-100 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
            The Team
          </h2>
          <p className="mt-3 text-slate-600">
            Meet the multidisciplinary team behind Hasthaartha
          </p>
        </div>

        <h3 className="mt-12 text-sm font-semibold uppercase tracking-wide text-slate-500 text-center">
          Team Members
        </h3>

        <ul className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => (
            <li
              key={member.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-blue-100 bg-blue-50/40 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-200"
            >
              <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden">
                <Image
                  src={member.image}
                  alt={`${member.name} profile photo`}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold text-slate-900">
                  {member.name}
                </h3>

                <p className="mt-1 text-sm font-medium text-blue-800">
                  {member.role}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-slate-600 line-clamp-4">
                  {member.description}
                </p>

                {/* Socials */}
                <div className="mt-5 flex flex-wrap gap-4 border-t border-blue-100/80 pt-5 opacity-80 group-hover:opacity-100 transition">
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 transition hover:text-blue-800"
                    >
                      <FaGithub className="h-5 w-5 text-slate-500" />
                      GitHub
                    </a>
                  )}

                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 transition hover:text-blue-800"
                    >
                      <FaLinkedin className="h-5 w-5 text-slate-500" />
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* ================= SUPERVISORS ================= */}
        <h3 className="mt-14 text-sm font-semibold uppercase tracking-wide text-slate-500 text-center">
          Supervisors
        </h3>

        <ul className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {supervisors.map((member) => (
            <li
              key={member.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-blue-100 bg-blue-50/40 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-200"
            >
              <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden">
                <Image
                  src={member.image}
                  alt={`${member.name} profile photo`}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold text-slate-900">
                  {member.name}
                </h3>

                <p className="mt-1 text-sm font-medium text-blue-800">
                  {member.role}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-slate-600 line-clamp-4">
                  {member.description}
                </p>


                <div className="mt-5 flex flex-wrap gap-4 border-t border-blue-100/80 pt-5 opacity-80 group-hover:opacity-100 transition">
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 transition hover:text-blue-800"
                    >
                      <FaGithub className="h-5 w-5 text-slate-500" />
                      GitHub
                    </a>
                  )}

                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 transition hover:text-blue-800"
                    >
                      <FaLinkedin className="h-5 w-5 text-slate-500" />
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}