import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { TechStack } from "@/components/TechStack";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Certifications } from "@/components/Certifications";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SiteBackground } from "@/components/ui/SiteBackground";
import { CustomCursor } from "@/components/ui/CustomCursor";

export default function Home() {
  return (
    <>
      <SiteBackground />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Education />
        <Experience />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}