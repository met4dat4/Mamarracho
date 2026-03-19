import "./seccion.css";
import { motion } from "framer-motion";
import { createPortal } from "preact/compat";
import Info from "./seccion-info.jsx";
import MV from "./seccion-MV.jsx";
import Spoti from "./seccion-spoti.jsx";

const SECCIONES = {
  MV: <MV />,
  info: <Info />,
  spoti: <Spoti />,
};

export default function Seccion({ close, idSeccion, rotacionInicial }) {
  return createPortal(
    <div class="overlay" onClick={close}>
      <motion.div
        layoutId={`carta-${idSeccion}`}
        id="contenido"
        onClick={(e) => e.stopPropagation()}
        initial={{ rotate: rotacionInicial }}
        animate={{ rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          mass: 1,
        }}
      >
        {SECCIONES[idSeccion] ?? <p>Ups, no encontré la sección.</p>}
      </motion.div>
    </div>,
    document.body, // 👈 se renderiza directo en el body, fuera de cualquier contenedor
  );
}
