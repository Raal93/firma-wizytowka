import { Link } from "react-router-dom";
import SmartHomeKrakow from "../components/smart-home/SmartHomeKrakow/SmartHomeKrakow.jsx";
import SystemsCooperationSection from "../components/smart-home/SystemsCooperationSection/SystemsCooperationSection.jsx";

export default function SmartHomeKrakowPage() {
  return (
    <>
      <SmartHomeKrakow />;
      <SystemsCooperationSection />
    </>
  );
}
