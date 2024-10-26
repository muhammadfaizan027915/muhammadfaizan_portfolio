import Hero from "@sections/Hero";
import About from "@sections/About";
import Skills from "@/sections/Skills";
import RecentProjects from "@sections/RecentProjects";
import WorkExperiences from "@/sections/WorkExpreiences";
import FloatingNavbar from "@ui/FloatingNavbar";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

import navigation from "@data/navigation.json";
import { Toaster } from "react-hot-toast";

export default function HomePage() {
  return (
    <div className="bg-[#06091F] overflow-hidden">
      <FloatingNavbar navigation={navigation} />
      <Hero />
      <About />
      <RecentProjects />
      <WorkExperiences />
      <Skills />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}
