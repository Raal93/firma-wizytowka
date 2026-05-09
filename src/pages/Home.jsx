import { services } from "../data/services";
import ServiceCard from "../components/ServiceCard/ServiceCard";
import { Link } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import SmartInstallationPreview from "../components/SmartInstallationPreview/SmartInstallationPreview";
import Projects from "../components/Projects/Projects.jsx";
import ServicesSection from "../components/ServicesSection/ServicesSection.jsx";
import TrustSection from "../components/TrustSection/TrustSection.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <SmartInstallationPreview />

      <Projects />
      <TrustSection />
    </>
  );
}
