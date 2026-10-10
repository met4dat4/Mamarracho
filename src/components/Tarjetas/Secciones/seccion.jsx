import "./seccion.css";
import { animate } from "motion";
import { useEffect, useRef, createPortal } from "preact/compat";
import Info from "./seccion-info.jsx";
import MV from "./seccion-MV.jsx";
import Spoti from "./seccion-spoti.jsx";

const SECCIONES = {
  MV: <MV />,
  info: <Info />,
  spoti: <Spoti />,
};

export default function Seccion({ close, idSeccion, rotacionInicial, xInicial }) {

  const modalRef = useRef(null);
  const overlayRef = useRef(null);
  // Animación de entrada al montarse/abrirse
  useEffect(() => {
    if ( modalRef.current && overlayRef.current) {
      animate(
        overlayRef.current,
        { rotate: [rotacionInicial, 0], opacity: [0, 1], scale:[0.2, 1], x: [xInicial, "0%"] },
        { duration: 0.4 }
      );
    }
  }, []);

  const handleClose = () => {
    // Animación de salida antes de desmontar
    if (modalRef.current && overlayRef.current) {
      animate(
        overlayRef.current,
        { rotate: [0, rotacionInicial], opacity: [1, 0], scale:[1, 0.2], x: ["0%", xInicial] },
        { duration: 0.4 }
      );
    }
    setTimeout(() => {
      close();
    }, 800);
  };

  return createPortal(
    <div ref={overlayRef} class="overlay" onClick={handleClose}>
      <div
        ref={modalRef}
        id="contenido"
        onClick={(e) => e.stopPropagation()}
      >
        {SECCIONES[idSeccion] ?? <p>Ups, no encontré la sección.</p>}
      </div>
    </div>,
    document.body,
  );
}
