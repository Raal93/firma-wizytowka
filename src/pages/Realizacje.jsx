import ProjectsGallery from "../components/home/Projects/ProjectsGallery";
import { projects } from "../data/projectsData";

export default function Realizacje() {
  return (
    <ProjectsGallery
      projects={projects}
      label="PEŁNA GALERIA"
      title="Realizacje i detale wykonania"
      description={[
        "Zobacz szerszy przekrój wykonanych prac — od rozdzielni i infrastruktury technicznej po systemy bezpieczeństwa, dostęp, monitoring i przygotowanie pod automatykę budynkową. Galeria zawiera także wcześniejsze realizacje, które pokazują techniczny fundament firmy przed jej rozwojem w kierunku Smart Home.",

        "Na rynku łatwo spotkać prezentacje oparte na wizualizacjach, inspiracjach lub projektach pokazanych w sposób oderwany od rzeczywistego zakresu prac. My stawiamy na przejrzystość — każdy kafelek to osobna realizacja, konkretny projekt i realny klient, dla którego wykonano instalację.",
      ]}
      pageMode={true}
    />
  );
}
