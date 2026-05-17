import "./FAQSection.css";

const faqs = [
  {
    question: "Czy smart home trzeba robić od razu w całym domu?",
    answer: "Nie. Można zacząć od najważniejszych funkcji, ale warto wcześniej przygotować okablowanie, rozdzielnię i miejsce na rozbudowę.",
  },
  {
    question: "Czy system działa bez internetu?",
    answer: "Dobrze zaprojektowana automatyka powinna wykonywać podstawowe funkcje lokalnie. Internet jest potrzebny głównie do dostępu zdalnego i wybranych usług online.",
  },
  {
    question: "Czy smart home jest tylko do nowych domów?",
    answer: "Nie, ale największą swobodę daje etap budowy lub większego remontu. W istniejącym domu zakres trzeba dobrać do dostępnej instalacji i możliwości technicznych.",
  },
  {
    question: "Co jest ważniejsze: aplikacja czy instalacja?",
    answer: "Aplikacja jest tylko warstwą obsługi. Fundamentem jest projekt, okablowanie, rozdzielnia, stabilna sieć i poprawnie zaprogramowana logika działania.",
  },
];

export default function FAQSection() {
  return (
    <section className="smart-section smart-section--soft">
      <div className="smart-container smart-faq">
        <div className="smart-section__header">
          <span className="smart-eyebrow">Najczęstsze pytania</span>
          <h2>Krótko o rzeczach, które zwykle blokują decyzję.</h2>
          <p>FAQ zbija podstawowe obiekcje bez wciskania oferty. Działa dobrze zwłaszcza dla osób, które dopiero porządkują temat.</p>
        </div>

        <div className="smart-faq__list">
          {faqs.map((faq, index) => (
            <details className="smart-card smart-faq__item" key={faq.question} open={index === 0}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
