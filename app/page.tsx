import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import { Contact } from "@/app/components/sections/Contact";
import { HomeHero } from "@/app/components/sections/HomeHero";
import { Milestones } from "@/app/components/sections/Milestones";
import { ProjectScope } from "@/app/components/sections/ProjectScope";
import { ResearchAchievement } from "@/app/components/sections/ResearchAchievement";
import { Team } from "@/app/components/sections/Team";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HomeHero />
        <ProjectScope />
        <Milestones />
        <Team />
        <ResearchAchievement />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
