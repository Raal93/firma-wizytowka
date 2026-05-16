import { Link } from "react-router-dom";
import Hero from "../components/home/Hero/Hero";
import ServicesSection from "../components/home/ServicesSection/ServicesSection";
import SmartInstallationPreview from "../components/home/SmartInstallationPreview/SmartInstallationPreview";
import TrustSection from "../components/home/TrustSection/TrustSection";
import Projects from "../components/home/Projects/Projects";
import FinalCTA from "../components/common/FinalCTA/FinalCTA";

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
