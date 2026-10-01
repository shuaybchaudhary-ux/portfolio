import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import MindsetSection from "@/components/home/MindsetSection";
import DataSection from "@/components/home/DataSection";
import BusinessSection from "@/components/home/BusinessSection";
import EngineeringSection from "@/components/home/EngineeringSection";
import BuildingSection from "@/components/home/BuildingSection";
import InterestsSection from "@/components/home/InterestsSection";
import ProjectsSection from "@/components/home/ProjectsSection";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <MindsetSection />
        <DataSection />
        <BusinessSection />
        <EngineeringSection />
        <BuildingSection />
        <InterestsSection />
        <ProjectsSection />
      </main>
    </>
  );
}