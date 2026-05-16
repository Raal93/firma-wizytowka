import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Circle, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./ServiceAreaMap.css";

function ResizeMap({ isFullscreen }) {
  const map = useMap();

  useEffect(() => {
    const timeout = setTimeout(() => {
      map.invalidateSize();
    }, 250);

    return () => clearTimeout(timeout);
  }, [isFullscreen, map]);

  return null;
}

function ScrollWheelControl({ enabled }) {
  const map = useMap();

  useEffect(() => {
    if (enabled) {
      map.scrollWheelZoom.enable();
    } else {
      map.scrollWheelZoom.disable();
    }
  }, [enabled, map]);

  return null;
}

export default function ServiceAreaMap() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [scrollEnabled, setScrollEnabled] = useState(false);

  const center = [50.0647, 19.945];
  const radius = 100000;

  return (
    <section className="service-area-section">
      <div className="service-area-container">
        <div className="service-area-layout">
          <div className="service-area-content">
            <span className="service-area-eyebrow">Obszar działania</span>

            <h2>Kraków / okolice</h2>

            <p>Realizuję systemy Smart Home w Krakowie i okolicznych miejscowościach. Zakres dojazdu ustalamy indywidualnie.</p>

            <p className="service-area-text-note">
              Standardowo działamy w promieniu około 100 km od Krakowa. W określonych przypadkach możliwa jest realizacja również dalej.
            </p>
          </div>

          <div className="service-area-map-column">
            <div
              className={isFullscreen ? "service-area-map-wrapper service-area-map-wrapper--fullscreen" : "service-area-map-wrapper"}
              onMouseEnter={() => setScrollEnabled(true)}
              onMouseLeave={() => setScrollEnabled(false)}
              onFocus={() => setScrollEnabled(true)}
              onBlur={() => setScrollEnabled(false)}
              tabIndex={0}
            >
              <button type="button" className="service-area-fullscreen-btn" onClick={() => setIsFullscreen((current) => !current)}>
                {isFullscreen ? "Zamknij mapę" : "Pełny ekran"}
              </button>

              <MapContainer center={center} zoom={7} scrollWheelZoom={false} className="service-area-map">
                <ResizeMap isFullscreen={isFullscreen} />
                <ScrollWheelControl enabled={scrollEnabled || isFullscreen} />

                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Circle
                  center={center}
                  radius={radius}
                  pathOptions={{
                    color: "#38bdf8",
                    fillColor: "#38bdf8",
                    fillOpacity: 0.14,
                    weight: 2,
                  }}
                >
                  <Popup>Obszar działania: Kraków / okolice</Popup>
                </Circle>
              </MapContainer>
            </div>

            <p className="service-area-map-note">Najedź kursorem na mapę, aby przybliżać ją kółkiem myszy.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
