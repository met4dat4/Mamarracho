import { useState } from "preact/hooks";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "preact/compat";
import "./seccion.css"; // Reutilizamos tus estilos base
import "./Portfolios.css";

const imagenes = [
  "/PORFOLIOS/01-MARTIN.webp",
  "/PORFOLIOS/02-ELIAS.webp",
  "/PORFOLIOS/03-ARI.webp",
  "/PORFOLIOS/04-PIKU.webp",
  "/PORFOLIOS/05-MONO.webp",
  "/PORFOLIOS/06-JOA.webp",
  "/PORFOLIOS/07-XAVI.webp",
  "/PORFOLIOS/08-FLOR.webp",
  "/PORFOLIOS/09-POLA.webp",
  "/PORFOLIOS/10-DANI.webp",
];

export default function Portfolios({ close }) {
  const [indice, setIndice] = useState(0);

  const siguiente = (e) => {
    e.stopPropagation();
    setIndice((prev) => (prev + 1) % imagenes.length);
  };

  const anterior = (e) => {
    e.stopPropagation();
    setIndice((prev) => (prev - 1 + imagenes.length) % imagenes.length);
  };

  return createPortal(
    <div className="overlay-portfolios" onClick={close}>
      <div id="contenido-portfolios" onClick={(e) => e.stopPropagation()}>
        <button className="btn-nav prev" onClick={anterior}>
          ‹
        </button>
        <div className="info-portfolios">
          <AnimatePresence mode="wait">
            <motion.img
              key={indice}
              src={imagenes[indice]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="slider-img"
            />
          </AnimatePresence>
        </div>
        <button className="btn-nav next" onClick={siguiente}>
          ›
        </button>
      </div>
    </div>,
    document.body,
  );
}
