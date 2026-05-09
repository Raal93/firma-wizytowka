import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

export default function ProjectsGallery({
  projects = [],
  label = "REALIZACJE",
  title = "Realizacje, które budują inteligentną instalację",
  description = "Przykłady prac z zakresu bezpieczeństwa, dostępu, sieci i elektryki — czyli elementów, które mogą tworzyć spójny system Smart Home.",
  showGalleryButton = false,
  pageMode = false,
}) {
  const [active, setActive] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [closing, setClosing] = useState(false);

  const openModal = (project) => {
    setActive(project);
    setImageIndex(0);
  };

  const closeModal = () => {
    setClosing(true);

    setTimeout(() => {
      setActive(null);
      setClosing(false);
      setImageIndex(0);
    }, 200);
  };

  const nextImage = () => {
    if (!active) return;

    setImageIndex((prev) => (prev === active.gallery.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    if (!active) return;

    setImageIndex((prev) => (prev === 0 ? active.gallery.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (!active) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [active]);

  return (
    <section className={`projects ${pageMode ? "projects--page" : ""}`}>
      <div className="projects__header">
        <p className="projects__label">{label}</p>
        <h2>{title}</h2>
        {Array.isArray(description) ? (
          <div className="projects__description">
            {description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        ) : (
          <p>{description}</p>
        )}
      </div>

      <div className="projects__grid">
        {projects.map((project) => (
          <button
            type="button"
            className="projects__card"
            key={project.id}
            onClick={() => openModal(project)}
            aria-label={`Zobacz realizację: ${project.title}`}
          >
            <img src={project.img} alt={project.title} />

            <div className="projects__overlay">
              <span>{project.tag}</span>
              <h3>{project.title}</h3>
              <p>{project.cardDesc}</p>
            </div>
          </button>
        ))}
      </div>

      {showGalleryButton && (
        <div className="projects__cta">
          <Link to="/realizacje" className="projects__button">
            Zobacz pełną galerię
          </Link>
        </div>
      )}

      {active && (
        <div className={`modal ${closing ? "modal--closing" : ""}`} onClick={closeModal}>
          <div className="modal__content" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="modal__close" onClick={closeModal} aria-label="Zamknij galerię">
              ✕
            </button>

            <div className="modal__left">
              <div className="modal__imageFrame">
                {active.gallery.length > 1 && (
                  <button type="button" className="modal__arrow modal__arrow--left" onClick={prevImage} aria-label="Poprzednie zdjęcie">
                    <span className="arrow-icon">‹</span>
                  </button>
                )}

                <img src={active.gallery[imageIndex]} alt={active.title} />

                {active.gallery.length > 1 && (
                  <button type="button" className="modal__arrow modal__arrow--right" onClick={nextImage} aria-label="Następne zdjęcie">
                    <span className="arrow-icon">›</span>
                  </button>
                )}
              </div>

              {active.gallery.length > 1 && (
                <div className="modal__thumbs">
                  {active.gallery.map((img, index) => (
                    <button
                      type="button"
                      key={index}
                      className={`modal__thumb ${index === imageIndex ? "active" : ""}`}
                      onClick={() => setImageIndex(index)}
                      aria-label={`Pokaż zdjęcie ${index + 1}`}
                    >
                      <img src={img} alt="" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="modal__right">
              <span>{active.tag}</span>
              <h3>{active.title}</h3>
              <p>{active.desc}</p>

              <ul>
                {active.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>

              <Link to={active.offerLink} className="modal__button">
                Zobacz ofertę
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
