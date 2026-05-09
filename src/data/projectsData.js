import domofona from "../assets/images/domofona.jpg";
import domofona1 from "../assets/images/domofona1.jpg";
import domofona2 from "../assets/images/domofona2.jpg";
import domofona3 from "../assets/images/domofona3.jpg";
import domofona4 from "../assets/images/domofona4.jpg";

import monitoring from "../assets/images/monitoring.jpg";
import monitoring1 from "../assets/images/monitoring1.jpg";
import monitoring2 from "../assets/images/monitoring2.jpg";
import monitoring3 from "../assets/images/monitoring3.jpg";

import sieci from "../assets/images/sieci.jpg";
import sieci1 from "../assets/images/sieci1.jpg";
import sieci2 from "../assets/images/sieci2.jpg";

import alarm from "../assets/images/alarm.jpg";
import alarm1 from "../assets/images/alarm1.jpg";
import alarm2 from "../assets/images/alarm2.jpg";

import rozdzielnia from "../assets/images/rozdzielnia.jpg";
import rozdzielnia1 from "../assets/images/rozdzielnia1.jpg";
import rozdzielnia2 from "../assets/images/rozdzielnia2.jpg";
import rozdzielnia3 from "../assets/images/rozdzielnia3.jpg";
import rozdzielnia4 from "../assets/images/rozdzielnia4.jpg";
import rozdzielnia5 from "../assets/images/rozdzielnia5.jpg";
import rozdzielnia6 from "../assets/images/rozdzielnia6.jpg";

import smart from "../assets/images/smart.jpg";
import smart1 from "../assets/images/smart1.jpg";
import smart2 from "../assets/images/smart2.jpg";

import domofon from "../assets/images/domofon.jpg";
import domofon1 from "../assets/images/domofon1.jpg";

export const projects = [
  {
    id: "domofon-alarm-dom",
    featured: true,
    homeOrder: 1,
    img: domofona2,
    gallery: [domofona, domofona1, domofona2, domofona3, domofona4],
    tag: "Dostęp + bezpieczeństwo",
    title: "Wideodomofon i alarm jako element inteligentnego domu",
    cardDesc: "Kontrola wejścia, alarm i dostęp z telefonu.",
    desc: "Realizacja pokazuje, jak system wejścia i zabezpieczenia domu może stać się częścią szerszej inteligentnej instalacji — z kontrolą dostępu, komunikacją, podglądem i możliwością dalszej integracji z automatyką budynkową.",
    details: [
      "Montaż wideodomofonu Dahua z czytnikiem RFID, szyfratorem i bezdotykowym przyciskiem wyjścia.",
      "Dostęp zdalny z telefonu, dwustronna komunikacja oraz sterowanie bramą i furtką.",
      "System alarmowy Satel z czujnikami obecności oraz zabezpieczeniem okien.",
      "Przygotowanie pod integrację z systemem automatyki budynkowej Ampio.",
    ],
    offerLink: "/uslugi",
  },
  {
    id: "cctv-dom",
    featured: true,
    homeOrder: 2,
    img: monitoring,
    gallery: [monitoring, monitoring1],
    tag: "Bezpieczeństwo",
    title: "Monitoring CCTV jako moduł bezpieczeństwa domu",
    cardDesc: "Podgląd posesji i kontrola zdarzeń.",
    desc: "Monitoring CCTV nie musi być osobnym systemem oderwanym od reszty instalacji. Może stanowić jeden z modułów bezpieczeństwa domu — z podglądem na żywo, zapisem zdarzeń i możliwością powiązania z alarmem lub automatyką.",
    details: [
      "Dobór lokalizacji kamer dla kluczowych stref posesji i wejść do budynku.",
      "Prowadzenie okablowania oraz przygotowanie stabilnej infrastruktury pod CCTV.",
      "Konfiguracja rejestratora, nagrywania, podglądu i dostępu zdalnego.",
      "Uruchomienie podglądu na telefonie.",
      "Zabezpieczenie systemu zasilaczem UPS na wypadek zaniku zasilania.",
    ],
    offerLink: "/uslugi",
  },
  {
    id: "cctv-modernizacja-firma",
    featured: true,
    homeOrder: 3,
    img: sieci,
    gallery: [sieci],
    tag: "Infrastruktura",
    title: "Modernizacja CCTV i sieci monitoringu",
    cardDesc: "Stabilna infrastruktura pod systemy bezpieczeństwa.",
    desc: "Ta realizacja pokazuje techniczne podejście do systemów niskoprądowych: porządek w infrastrukturze, stabilną sieć dla monitoringu i przygotowanie systemu pod dalszą rozbudowę.",
    details: [
      "Przegląd istniejących kamer IP i analogowych oraz ocena możliwości rozbudowy.",
      "Naprawa niedziałających kamer lub wymiana na nowe zgodnie z założeniami klienta.",
      "Rozbudowa części analogowej z wykorzystaniem istniejącej infrastruktury.",
      "Rozbudowa części IP wraz z wydzieleniem dedykowanej sieci dla CCTV.",
      "Dostosowanie systemu do aktualnej infrastruktury klienta.",
    ],
    offerLink: "/uslugi",
  },
  {
    id: "ppoz-modernizacja-serwerownia",
    featured: true,
    homeOrder: 4,
    img: alarm,
    gallery: [alarm, alarm1, alarm2],
    tag: "Bezpieczeństwo techniczne",
    title: "System wczesnego wykrywania zagrożeń",
    cardDesc: "Detekcja, powiadamianie i szybka reakcja.",
    desc: "Systemy bezpieczeństwa technicznego powinny działać niezależnie i niezawodnie. W inteligentnym budynku mogą dodatkowo przekazywać informacje do automatyki, powiadomień lub scen awaryjnych.",
    details: [
      "Przegląd istniejącego systemu wczesnego wykrywania pożaru.",
      "Wymiana niesprawnych czujników oraz rozbudowa instalacji.",
      "Wymiana uszkodzonej centrali Satel CA-64 na Satel Integra 128.",
      "Konfiguracja systemu pod wymagania bezpieczeństwa obiektu.",
      "Podłączenie systemu do sieci GSM oraz lokalnej grupy interwencyjnej.",
    ],
    offerLink: "/uslugi",
  },
  {
    id: "rozdzielnia-firma-modernizacja",
    featured: true,
    homeOrder: 5,
    img: rozdzielnia3,
    gallery: [rozdzielnia3],
    tag: "Fundament instalacji",
    title: "Rozdzielnia jako baza pod automatykę",
    cardDesc: "Porządek, opis i gotowość do rozbudowy.",
    desc: "Dobrze wykonana i opisana rozdzielnia to fundament nowoczesnej instalacji. Ułatwia serwis, rozbudowę oraz późniejszą integrację z automatyką budynkową, pomiarami energii i systemami sterowania.",
    details: [
      "Przeniesienie rozdzielni elektrycznej do nowej lokalizacji.",
      "Modernizacja układu rozdzielni oraz uporządkowanie obwodów.",
      "Oznaczenie obwodów dla łatwiejszego serwisu i diagnostyki.",
      "Dostosowanie rozdzielni do aktualnych wymagań eksploatacyjnych.",
      "Przygotowanie instalacji pod przyszłą rozbudowę i integrację.",
    ],
    offerLink: "/uslugi",
  },
];

export const homepageProjects = projects
  .filter((project) => project.featured)
  .sort((a, b) => a.homeOrder - b.homeOrder)
  .slice(0, 6);
