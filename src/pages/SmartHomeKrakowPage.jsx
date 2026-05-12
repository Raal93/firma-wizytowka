import { Link } from "react-router-dom";
import SmartHomeKrakow from "../components/SmartHomeKrakow/SmartHomeKrakow.jsx";
import SystemsCooperationSection from "../components/SystemsCooperationSection/SystemsCooperationSection.jsx";

export default function SmartHomeKrakowPage() {
  return (
    <>
      <SmartHomeKrakow />;
      <SystemsCooperationSection />
    </>
  );
}
