import "./SmartHomeShared.css";

import SmartHero from "./SmartHero";
import SmartIntro from "./SmartIntro";
import BenefitsSection from "./BenefitsSection";
import InteractiveScenariosSection from "./InteractiveScenariosSection";
import PlanningSection from "./PlanningSection";
import FAQSection from "./FAQSection";
import FinalCTA from "../../common/FinalCTA/FinalCTA";
import ControlMethodsSection from "./ControlMethodsSection";
import SmartSystemMap from "./SmartSystemMap";

export default function SmartHomeKrakow() {
  return (
    <main className="smart-page">
      <SmartHero />
      <SmartIntro />
      <BenefitsSection />
      <SmartSystemMap />
      <InteractiveScenariosSection />
      <PlanningSection />
      <ControlMethodsSection />
      <FAQSection />
      <FinalCTA />
    </main>
  );
}
