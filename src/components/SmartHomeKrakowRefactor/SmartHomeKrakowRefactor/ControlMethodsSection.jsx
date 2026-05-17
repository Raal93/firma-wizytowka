import "./ControlMethodsSection.css";

const controlMethods = [
  {
    number: "01",
    title: "Automatyzacje i sceny",
    text: "Dom działa sam tam, gdzie ma to sens.",
  },
  {
    number: "02",
    title: "Przyciski i panele na ścianie",
    text: "Szybka obsługa bez szukania telefonu.",
  },
  {
    number: "03",
    title: "Aplikacja w telefonie",
    text: "Podgląd, zdalne sterowanie i powiadomienia.",
  },
  {
    number: "04",
    title: "Obsługa lokalna i awaryjna",
    text: "Manipulator alarmu, pilot, bramofon czy przycisk przy bramie.",
  },
];

export default function ControlMethodsSection() {
  return (
    <section className="control-methods-section" id="control-methods">
      <div className="control-methods-container">
        <div className="control-methods-header">
          <span className="control-methods-eyebrow">Sposób sterowania</span>

          <h2>Jak sterowany jest Inteligentny Dom</h2>

          <p>Dobrze zaprojektowany system Smart Home daje kilka warstw obsługi — abyś miał kontrolę w każdej sytuacji.</p>
        </div>

        <div className="control-methods-list">
          {controlMethods.map((item) => (
            <article className="control-method" key={item.number}>
              <div className="control-method__number">{item.number}</div>

              <div className="control-method__content">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
