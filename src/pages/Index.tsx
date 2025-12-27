import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExtraCurricularSection from "@/components/ExtraCurricularSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <ExtraCurricularSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
