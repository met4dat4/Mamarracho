import { useState } from "preact/hooks";
import Seccion from "../Tarjetas/Secciones/seccion.jsx";
import SeccionPortfolios from "./Secciones/seccion-portfolios.jsx";
import SeccionTrayectoria from "./Secciones/seccion-trayectoria.jsx";
import { motion } from "framer-motion";
import "./ficha.css";

export default function Ficha({ id, imagenSrc, ModalComponent }) {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <div className="ficha" id={id} onClick={() => setOpened(true)}>
        <img
          src={imagenSrc}
          alt=""
          loading="eager"
          fetchpriority="high"
        />
    </div>
      {opened && <ModalComponent close={() => setOpened(false)} />}
    </>
  );
}
