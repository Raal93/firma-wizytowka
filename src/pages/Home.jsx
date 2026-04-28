import { services } from "../data/services";
import ServiceCard from "../components/ServiceCard/ServiceCard";
import { Link } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import Benefits from "../components/Benefits/Benefits";
import Projects from "../components/Projects/Projects.jsx";
import ServicesSection from "../components/ServicesSection/ServicesSection.jsx";
import AboutSection from "../components/AboutSection/AboutSection.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <ServicesSection />
      <Projects />
      <AboutSection />
    </>
  );
}
