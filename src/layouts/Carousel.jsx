import { useState } from "preact/hooks";
import { createPortal } from "preact/compat";
import "./Carousel.css";

export default function Carousel({ close, imagenes = [], scroll = false }) {
  const [indice, setIndice] = useState(0);
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      close();
    }, 400);
  };

  const siguiente = (e) => {
    e.stopPropagation();
    setIndice((prev) => (prev + 1) % imagenes.length);
  };

  const anterior = (e) => {
    e.stopPropagation();
    setIndice((prev) => (prev - 1 + imagenes.length) % imagenes.length);
  };

  return createPortal(
    <div
      className={`overlay ${closing ? "closing" : ""}`}
      onClick={handleClose}
    >
      <div id="content" onClick={(e) => e.stopPropagation()}>
        <button className="btn-nav close" onClick={handleClose}>
          <img src="/UX/cross.svg" alt="" className="close-img" />
        </button>
        <button className="btn-nav prev" onClick={anterior}>
          ‹
        </button>
        <div className="carousel-view">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${indice * 100}%)` }}
          >
            {imagenes.map((src) => (
              <div
                className={`carousel-slide ${scroll ? "scrollable" : ""}`}
                key={src}
              >
                <img src={src} alt="" className="slider-img" />
              </div>
            ))}
          </div>
        </div>

        <button className="btn-nav next" onClick={siguiente}>
          ›
        </button>
      </div>
    </div>,
    document.body
  );
}
