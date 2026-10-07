import { useState } from "preact/hooks";
import Seccion from "../Secciones/seccion.jsx";
import SeccionPortfolios from "../Secciones/seccion-portfolios.jsx";
import SeccionTrayectoria from "../Secciones/seccion-trayectoria.jsx";
import { motion } from "framer-motion";
import "./ficha.css";

export default function Ficha({ idSeccion }) {
  const [opened, setOpened] = useState(false);

  const URL_FICHAS = {
    bruja: <SeccionPortfolios close={() => setOpened(false)} />,
    brujo: <SeccionTrayectoria close={() => setOpened(false)} />,
  };

  const IMAGENES_FICHAS = {
    bruja: "/Bruja.webp",
    brujo: "/Brujo.webp",
  };

  return (
    <>
      <motion.div
        layout
        class="ficha"
        id={idSeccion}
        onClick={() => setOpened(true)}
        initial={{
          filter: "drop-shadow(0 0 0px rgba(232, 217, 102, 0))",
        }}
        animate={{
          filter: "drop-shadow(0 0 0px rgba(232, 217, 102, 0))",
        }}
        style={{
          originX: 0.5,
          originY: 0.5,
          cursor: "pointer",
          willChange: "transform",
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20, mass: 1 }}
        whileHover={{
          scale: 1.05,
          filter: "drop-shadow(0 0 5px rgba(232, 217, 102, 1))",
        }}
      >
        <img
          src={IMAGENES_FICHAS[idSeccion]}
          alt=""
          style={{ pointerEvents: "none" }}
          loading="eager"
          fetchpriority="high"
        />
      </motion.div>
      {opened && (URL_FICHAS[idSeccion] || <p>Ups, no encontré la sección.</p>)}
    </>
  );
}
