import { useState } from "react";
import "./FAQSection.css";

const faqs = [
  {
    question: "Czy smart home trzeba robić od razu w całym domu?",
    answer:
      "Nie trzeba. Można zacząć od kilku wybranych funkcji, natomiast warto na etapie budowy przygotować odpowiednie okablowanie i dodatkowe miejsce w rozdzielni. Dzięki temu późniejsza rozbudowa będzie łatwiejsza i nie będzie wymagała ingerencji w ściany.",
  },
  {
    question: "Czy system działa bez internetu?",
    answer:
      "Projektujemy nasze instalacje tak, aby automatyka wykonywała swoje funkcje lokalnie. Internet jest potrzebny głównie do dostępu zdalnego i wybranych usług online.",
  },
  {
    question: "Czy smart home jest tylko do nowych domów?",
    answer:
      "Nie, ale największą swobodę daje etap budowy lub większego remontu. W istniejącym domu zakres trzeba dobrać do dostępnej instalacji i możliwości technicznych.",
  },
  {
    question: "Czy smart home oznacza sterowanie wszystkim z telefonu?",
    answer:
      "Jest to możliwe, ale nie jest naszym głównym celem. Telefon jest tylko jedną z metod obsługi. Projektujemy system tak, aby działał przede wszystkim automatycznie — przez sceny, harmonogramy i przyciski ścienne. Aplikacja służy głównie do podglądu, zmiany ustawień i sterowania spoza domu.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  return (
    <section className="smart-section smart-section--soft">
      <div className="smart-container smart-faq">
        <div className="smart-section__header">
          <span className="smart-eyebrow">Najczęstsze pytania</span>
          <h2>Zanim zaplanujesz instalację</h2>
          <p>
            Kilka praktycznych odpowiedzi, które pomagają uporządkować temat smart home. Jeśli masz inne pytania, możesz zadać je nam poprzez
            formularz.
          </p>
        </div>

        <div className="smart-faq__list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div className={`smart-card smart-faq__item ${isOpen ? "smart-faq__item--open" : ""}`} key={faq.question}>
                <button className="smart-faq__trigger" type="button" onClick={() => toggleFaq(index)} aria-expanded={isOpen}>
                  {faq.question}
                </button>

                <div className="smart-faq__content" aria-hidden={!isOpen}>
                  <div className="smart-faq__content-inner">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
