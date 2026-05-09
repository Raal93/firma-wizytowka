import { Link } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import SmartInstallationPreview from "../components/SmartInstallationPreview/SmartInstallationPreview";
import ServicesSection from "../components/ServicesSection/ServicesSection.jsx";
import TrustSection from "../components/TrustSection/TrustSection.jsx";
import FinalCTA from "../components/FinalCTA/FinalCTA.jsx";
import Projects from "../components/Projects/Projects.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <SmartInstallationPreview />
      <TrustSection />
      <Projects />
      <FinalCTA />
    </>
  );
}
