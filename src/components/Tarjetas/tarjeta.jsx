import { useState } from "preact/hooks";
import "./tarjeta.css";
import tarjeta from "../../assets/Main/tarjeta.svg";
import Seccion from "../Secciones/seccion.jsx";
import { motion } from "framer-motion";

export default function Tarjeta({ rotacion, idSeccion }) {
  const [opened, setOpened] = useState(false);

  const rotacionNumerica = parseInt(rotacion);

  return (
    <>
      <motion.div
        class="tarjeta"
        onClick={() => setOpened(true)}
        initial={{
          rotate: rotacionNumerica,
          filter: "drop-shadow(0 0 0px rgba(232, 217, 102, 0))",
        }}
        animate={{
          rotate: rotacionNumerica,
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
          src={tarjeta.src}
          alt=""
          style={{ "--rotacion": rotacion, pointerEvents: "none" }}
        />
      </motion.div>
      {opened && (
        <Seccion
          idSeccion={idSeccion}
          rotacionInicial={rotacionNumerica}
          close={() => setOpened(false)}
        />
      )}
    </>
  );
}
