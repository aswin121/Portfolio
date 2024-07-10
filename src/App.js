import React, { useEffect } from "react";
import Navbar from "../src/Portfolio/Navbar/Navbar";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroSection from "./Portfolio/Sections/HeroSection";
import AboutSection from "./Portfolio/Sections/AboutSection";
import SkillsSection from "./Portfolio/Sections/SkillsSections";
import ProjectsSection from "./Portfolio/Sections/ProjectsSection";
import ContactSection from "./Portfolio/Sections/ContactSection";
// import FramerMotion from "./UserInteractedAnimations/FramerMotion";
// import ReactSpring from "./UserInteractedAnimations/ReactSpring";
// import LottieAnimation from "./UserInteractedAnimations/LottieAnimation";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default App;
