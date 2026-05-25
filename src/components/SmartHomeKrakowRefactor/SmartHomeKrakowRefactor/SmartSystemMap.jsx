import { useEffect, useMemo, useState } from "react";
import "./SmartSystemMap.css";

const SECTION_ID = "obszary-integracji";
const HASH_PREFIX = `${SECTION_ID}-`;

const systems = [
  {
    id: "security",
    slug: "bezpieczenstwo",
    title: "Bezpieczeństwo",
    short: "Alarm, monitoring, kontrola dostępu, brama, wideodomofon.",
    desc: "Ostoja inteligentnego domu. Obszar bezpieczeństwa może wymieniać sygnały z innymi systemami ale pozostaje oddzielną warstwą nastawioną na niezawodność. Projektowany z myślą o odporności zarówno na ingerencję osób trzecich, jak i na problemy z internetem lub zasilaniem.",
    result:
      "System alarmowy wie rzeczy, których reszta domu może użyć: domownicy wyszli, ktoś wrócił, trwa tryb nocny, naruszono wejście. Smart home reaguje na te sygnały zmieniając zachowanie świateł, rolet, ogrzewania czy wysyłając powiadomienia.",
  },
  {
    id: "energy",
    slug: "energia-klimat",
    title: "Energia i klimat",
    short: "Ogrzewanie, klimatyzacja, rekuperacja, rolety, fotowoltaika, magazyn energii.",
    desc: "Obszar energii i klimatu ma dwa główne zadania: utrzymywać komfortowe warunki w domu i zapobiegać bezcelowemu zużyciu energii. System działa automatycznie, a ustawienia można zmieniać z jednego miejsca — na przykład z panelu na ścianie lub aplikacji w telefonie.",
    result:
      "Dzięki integracji w jeden system, inteligentny dom wie, jaka jest pogoda, czy w domu są mieszkańcy i jakie warunki panują w różnych częściach budynku. Na podstawie tych danych reguluje urządzenia tak, aby utrzymać zadane parametry.",
  },
  {
    id: "lighting",
    slug: "oswietlenie",
    title: "Oświetlenie",
    short: "Obwody, ściemnianie, LED, sceny, czujniki obecności i jasności.",
    desc: "Jedna z najczęściej używanych warstw inteligentnego domu. Ma zapewniać dobre warunki oświetlenia bez plątaniny ręcznych przełączników. Większość świateł może zapalać się i gasnąć automatycznie, a wybranymi strefami można sterować z paneli, aplikacji lub głosowo. Można też tworzyć sceny łączące oświetlenie z innymi systemami, aby dopasować atmosferę do różnych aktywności i pór dnia.",

    result:
      "Dzięki integracji inteligentny dom rozpoznaje, kiedy ktoś wchodzi na korytarz, do łazienki czy na taras, i automatycznie zapala światło, dostosowując je do pory dnia.",
  },
  {
    id: "av",
    slug: "audio-wideo",
    title: "Audiowizualny",
    short: "Multiroom audio, TV, kino domowe, playlisty, sceny, sterowanie głosowe.",
    desc: "Audio i wideo to warstwa komfortu inteligentnego domu. Pozwala słuchać muzyki w różnych częściach domu i ogrodu, uzupełnia sceny takie jak kino, relaks czy spotkanie na tarasie, a także może obsługiwać komunikaty i głosowe interakcje z domem.",
    result:
      "Dzięki integracji dźwięk może być częścią scen pomieszczeń — od porannej muzyki w kuchni po wieczorny klimat w salonie lub relaks na tarasie. Ulubiona playlista ze Spotify może podążać za Tobą po całym domu.",
  },
];

function getSystemIdFromHash(hash) {
  if (!hash) return null;

  let normalizedHash = hash.replace("#", "").trim();

  try {
    normalizedHash = decodeURIComponent(normalizedHash);
  } catch {
    return null;
  }

  const slug = normalizedHash.startsWith(HASH_PREFIX) ? normalizedHash.replace(HASH_PREFIX, "") : normalizedHash.replace("obszar-", "");

  const matchedSystem = systems.find((system) => system.id === slug || system.slug === slug);

  return matchedSystem?.id || null;
}

export default function SmartSystemMap() {
  const [activeSystemId, setActiveSystemId] = useState(() => {
    if (typeof window === "undefined") return systems[0].id;

    return getSystemIdFromHash(window.location.hash) || systems[0].id;
  });

  const activeSystem = useMemo(() => {
    return systems.find((system) => system.id === activeSystemId) || systems[0];
  }, [activeSystemId]);

  useEffect(() => {
    const handleHashChange = () => {
      const nextSystemId = getSystemIdFromHash(window.location.hash);

      if (!nextSystemId) return;

      setActiveSystemId(nextSystemId);

      requestAnimationFrame(() => {
        document.getElementById(SECTION_ID)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleSystemClick = (system) => {
    setActiveSystemId(system.id);

    if (typeof window === "undefined") return;

    const nextHash = `${HASH_PREFIX}${system.slug}`;

    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}#${nextHash}`);
  };

  return (
    <section className="smart-section smart-system-map-section" id={SECTION_ID}>
      <div className="smart-container">
        <div className="smart-card smart-system-map">
          <div className="smart-system-map__heading">
            <span>Obszary integracji</span>
            <h2>Osobne instalacje, jedna logika</h2>
            <div className="smart-fade-divider smart-fade-divider--wide smart-fade-divider--compact" />
          </div>

          <div className="smart-system-map__layout">
            <div className="smart-system-map__buttons" role="tablist" aria-label="Obszary integracji smart home">
              {systems.map((system) => (
                <button
                  type="button"
                  key={system.id}
                  id={`tab-${system.id}`}
                  className={`smart-system-button smart-system-button--${system.id} ${activeSystemId === system.id ? "is-active" : ""}`}
                  onClick={() => handleSystemClick(system)}
                  role="tab"
                  aria-selected={activeSystemId === system.id}
                  aria-controls="smart-system-detail"
                >
                  <strong>{system.title}</strong>
                  <span>{system.short}</span>
                </button>
              ))}
            </div>

            <article
              className={`smart-system-detail smart-system-detail--${activeSystem.id}`}
              id="smart-system-detail"
              role="tabpanel"
              aria-labelledby={`tab-${activeSystem.id}`}
            >
              <span>Wybrany obszar</span>
              <h3>{activeSystem.title}</h3>
              <p>{activeSystem.desc}</p>

              <div className="smart-system-detail__result">
                <strong>Efekt integracji:</strong>
                <span>{activeSystem.result}</span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
