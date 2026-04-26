import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import { TEAM_MEMBERS } from "@/app/lib/constants";

export function Team() {
  const members = TEAM_MEMBERS.slice(0, 4);
  const supervisors = TEAM_MEMBERS.slice(4, 7);

  return (
    <section id="team" className="relative scroll-mt-20 overflow-hidden bg-white py-24 sm:py-32">
      {/* Background Decorative Elements - Subtle Light Gradients */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] pointer-events-none opacity-60" />
      <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-[140px] pointer-events-none opacity-60" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600 uppercase tracking-widest">
            Expertise Behind Hasthaartha
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Meet Our Team
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            A multidisciplinary collective of researchers, developers, and visionaries bridging the gap between human gestures and machine intelligence.
          </p>
        </div>

        {/* Team Members Section */}
        <div className="mt-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-blue-500">Core Developers</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
            {members.map((member, idx) => (
              <TeamMemberCard key={member.name} member={member} delay={idx * 100} />
            ))}
          </div>
        </div>

        {/* Supervisors Section */}
        <div className="mt-32">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-500">Supervisory Panel</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />
          </div>

          <div className="grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {supervisors.map((member, idx) => (
              <TeamMemberCard key={member.name} member={member} delay={(idx + 4) * 100} isSupervisor />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamMemberCard({ member, delay, isSupervisor = false }: { member: any; delay: number; isSupervisor?: boolean }) {
  return (
    <div 
      className="group relative"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative flex flex-col items-center">
        {/* Card Body - Light Premium Aesthetic */}
        <div className="relative w-full overflow-hidden rounded-[2.5rem] border border-blue-100 bg-white p-8 shadow-sm transition-all duration-500 group-hover:border-blue-400/50 group-hover:shadow-[0_20px_50px_rgba(59,130,246,0.12)] pt-12">
          
          {/* Circular Image Container */}
          <div className="relative mx-auto w-40 h-40">
            {/* Animated Ring */}
            <div className={`absolute -inset-1 rounded-full bg-gradient-to-tr ${isSupervisor ? 'from-indigo-400 to-purple-400' : 'from-blue-400 to-cyan-400'} opacity-30 blur-sm transition-all duration-500 group-hover:opacity-100 group-hover:blur-md group-hover:rotate-180`} />
            
            <div className="relative aspect-square w-full h-full overflow-hidden rounded-full border-4 border-white bg-slate-50 shadow-inner">
              <Image
                src={member.image}
                alt={`${member.name} profile photo`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="160px"
              />
              {/* Overlay Gradient - Subtle */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity duration-500" />
            </div>
          </div>

          {/* Member Info - Centered */}
          <div className="relative mt-8 text-center px-2 pb-2">
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors duration-300">
                {member.name}
              </h3>
              <p className={`mt-2 text-sm font-bold uppercase tracking-wider ${isSupervisor ? 'text-indigo-600' : 'text-blue-600'}`}>
                {member.role}
              </p>
            </div>

            <div className="mt-5 h-20 overflow-hidden">
              <p className="text-sm leading-relaxed text-slate-600 line-clamp-3 transition-opacity duration-300 group-hover:text-slate-800">
                {member.description}
              </p>
            </div>

            {/* Social Links - Light Mode Style */}
            <div className="mt-8 flex justify-center items-center gap-4 pt-6 border-t border-slate-100">
              {member.github && (
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-50 text-slate-500 hover:bg-blue-600 hover:text-white hover:shadow-[0_8px_15px_rgba(37,99,235,0.2)] transition-all duration-300"
                  aria-label={`${member.name}'s GitHub`}
                >
                  <FaGithub className="h-5 w-5" />
                </a>
              )}
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-50 text-slate-500 hover:bg-blue-600 hover:text-white hover:shadow-[0_8px_15px_rgba(37,99,235,0.2)] transition-all duration-300"
                  aria-label={`${member.name}'s LinkedIn`}
                >
                  <FaLinkedin className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Subtle hover glow behind the card */}
        <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-gradient-to-br from-blue-600/5 to-indigo-600/5 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />
      </div>
    </div>
  );
}