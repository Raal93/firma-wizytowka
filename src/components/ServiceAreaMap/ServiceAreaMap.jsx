import { MapContainer, TileLayer, Circle, Popup } from "react-leaflet";
import { useState } from "react";
import "leaflet/dist/leaflet.css";
import "./ServiceAreaMap.css";
import { useEffect } from "react";
import { useMap } from "react-leaflet";

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

export default function ServiceAreaMap() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const center = [50.0647, 19.945]; // Kraków
  const radius = 100000; // 100 km w metrach

  return (
    <section className="service-area-section">
      <div className="service-area-container">
        <div className="service-area-content">
          <span className="service-area-eyebrow">Obszar działania</span>

          <h2>Kraków i okolice do około 100km</h2>

          <p>Realizuję instalacje na terenie Krakowa oraz w okolicznych miejscowościach. Dokładny dojazd i zakres prac ustalam indywidualnie.</p>
        </div>

        <div className={isFullscreen ? "service-area-map-wrapper service-area-map-wrapper--fullscreen" : "service-area-map-wrapper"}>
          <button type="button" className="service-area-fullscreen-btn" onClick={() => setIsFullscreen(!isFullscreen)}>
            {isFullscreen ? "Zamknij" : "Pełny ekran"}
          </button>

          <MapContainer center={center} zoom={7} scrollWheelZoom={true} className="service-area-map">
            <ResizeMap isFullscreen={isFullscreen} />
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
                fillOpacity: 0.16,
                weight: 2,
              }}
            >
              <Popup>Obszar działania: Kraków + około 100 km</Popup>
            </Circle>
          </MapContainer>
        </div>
      </div>
    </section>
  );
}
