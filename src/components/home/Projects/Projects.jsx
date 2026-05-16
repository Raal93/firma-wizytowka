import ProjectsGallery from "./ProjectsGallery";
import { homepageProjects } from "../../../data/projectsData";

export default function Projects() {
  return (
    <ProjectsGallery
      projects={homepageProjects}
      label="REALIZACJE"
      title="Realizacje, które pokazują jakość wykonania"
      description="Wybrane prace z zakresu instalacji elektrycznych, bezpieczeństwa, dostępu, sieci i przygotowania pod automatykę budynkową."
      showGalleryButton={true}
    />
  );
}
