import ServiceAreaMap from "../components/contact/ServiceAreaMap/ServiceAreaMap.jsx";
import ContactHero from "../components/contact/ContactHero/ContactHero";
import ContactProcess from "../components/contact/ContactProcess/ContactProcess";
import ContactFormSection from "../components/contact/ContactFormSection/ContactFormSection";
import "../components/contact/ContactShared.css";

export default function ContactPage() {
  return (
    <main className="contact-page">
      <ContactHero />
      <ServiceAreaMap />
      <ContactProcess />
      <ContactFormSection />
    </main>
  );
}
