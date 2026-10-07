import { useState } from "preact/hooks";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "preact/compat";
import "./seccion.css"; // Reutilizamos tus estilos base
import "./Portfolios.css";

const imagenes = [
  "/Trayectoria/01 MAS DE MI PANTANO.webp",
  "/Trayectoria/02 vivo y los 7 lagos.webp",
  "/Trayectoria/03 RULANDO CORAJE.webp",
  "/Trayectoria/04 37.webp",
  "/Trayectoria/05 MAMARRACHO.webp",
];

export default function Trayectoria({ close }) {
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
        <div className="info-trayectoria">
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
