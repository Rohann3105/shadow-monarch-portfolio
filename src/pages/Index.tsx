import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background grid-bg overflow-x-hidden">
      {/* Background layers */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 20% 30%, rgba(91, 46, 255, 0.12), transparent 40%),
              radial-gradient(circle at 80% 70%, rgba(124, 58, 237, 0.08), transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(15, 20, 36, 0.9), transparent 80%)
            `,
          }}
        />
      </div>
      <ParticleBackground />
      <Navbar />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-border/30">
          <div className="max-w-5xl mx-auto text-center">
            <p className="font-mono text-xs text-muted-foreground tracking-wider">
              <span className="text-monarch-purple">©</span> 2026 Rohan Chaware — All systems operational
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
