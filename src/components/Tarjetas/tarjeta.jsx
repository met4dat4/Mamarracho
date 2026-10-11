import { useRef, useState } from "preact/hooks";
import "./tarjeta.css";
import Seccion from "./Secciones/seccion.jsx";

export default function Tarjeta({ rotacion, idSeccion, xInicial }) {
  const [opened, setOpened] = useState(false);

  const rotacionNumerica = parseInt(rotacion);

  return (
    <>
      <div
        class="tarjeta"
        onClick={() => {
          setOpened(true);
        }}
        style={{ transform: `rotate(${rotacion})` }}
      >
        <img
          src="/tarjeta.webp"
          alt=""
          style={{ "--rotacion": rotacion, pointerEvents: "none" }}
          loading="eager"
          fetchpriority="high"
        />
      </div>
      {opened && (
        <Seccion
          idSeccion={idSeccion}
          rotacionInicial={rotacionNumerica}
          xInicial={xInicial}
          close={() => setOpened(false)}
        />
      )}
    </>
  );
}
