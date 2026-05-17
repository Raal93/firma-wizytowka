import "./SmartHomeShared.css";

import SmartHero from "./SmartHero";
import SmartIntro from "./SmartIntro";
import BenefitsSection from "./BenefitsSection";
import InteractiveScenariosSection from "./InteractiveScenariosSection";
import SmartAreasSection from "./SmartAreasSection";
import PlanningSection from "./PlanningSection";
import TechnologySection from "./TechnologySection";
import ProcessSection from "./ProcessSection";
import FAQSection from "./FAQSection";
import FinalCTA from "./FinalCTA";

export default function SmartHomeKrakow() {
  return (
    <main className="smart-page">
      <SmartHero />
      <SmartIntro />
      <BenefitsSection />
      <InteractiveScenariosSection />
      <SmartAreasSection />
      <PlanningSection />
      <TechnologySection />
      <ProcessSection />
      <FAQSection />
      <FinalCTA />
    </main>
  );
}
