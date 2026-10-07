import "./casilleros.css";
import { useState } from "preact/hooks";
import Pergamino from "./pergamino.jsx";

export default function Casilleros({ rotacion, idSeccion }) {
  const [infoPergamino, setInfoPergamino] = useState({
    visible: false,
    idTexto: "",
    categoria: 1,
  });

  const abrirPergamino = (idTexto, categoriaId) => {
    setInfoPergamino({
      visible: true,
      idTexto: idTexto,
      categoria: categoriaId,
    });
  };
  return (
    <>
      <div class="grid-botones">
        <button
          onClick={() => abrirPergamino("calavera-upper", "calavera")}
          class="casillero calavera-upper"
        >
          <img
            src="/Casilleros/calavera-upper.webp"
            alt=""
            loading="lazy"
            decoding="async"
          />
        </button>
        <button
          onClick={() => abrirPergamino("calavera-bottom", "calavera")}
          class="casillero calavera-bottom"
        >
          <img
            src="/Casilleros/calavera-bottom.webp"
            alt=""
            loading="lazy"
            decoding="async"
          />
        </button>
        <button
          onClick={() => abrirPergamino("bola-upper", "bola")}
          class="casillero bola-upper"
        >
          <img
            src="/Casilleros/bola-upper.webp"
            alt=""
            loading="lazy"
            decoding="async"
          />
        </button>
        <button
          onClick={() => abrirPergamino("bola-bottom", "bola")}
          class="casillero bola-bottom"
        >
          <img
            src="/Casilleros/bola-bottom.webp"
            alt=""
            loading="lazy"
            decoding="async"
          />
        </button>
        <button
          onClick={() => abrirPergamino("serpiente-upper", "serpiente")}
          class="casillero serpiente-upper"
        >
          <img
            src="/Casilleros/serpiente-upper.webp"
            alt=""
            loading="lazy"
            decoding="async"
          />
        </button>
        <button
          onClick={() => abrirPergamino("serpiente-bottom", "serpiente")}
          class="casillero serpiente-bottom"
        >
          <img
            src="/Casilleros/serpiente-bottom.webp"
            alt=""
            loading="lazy"
            decoding="async"
          />
        </button>
        <button
          onClick={() => abrirPergamino("libro-bottom", "libro")}
          class="casillero libro-bottom"
        >
          <img
            src="/Casilleros/libro-bottom.webp"
            alt=""
            loading="lazy"
            decoding="async"
          />
        </button>
        <button
          onClick={() => abrirPergamino("libro-upper", "libro")}
          class="casillero libro-upper"
        >
          <img
            src="/Casilleros/libro-upper.webp"
            alt=""
            loading="lazy"
            decoding="async"
          />
        </button>
      </div>
      <Pergamino
        idTexto={infoPergamino.idTexto}
        visible={infoPergamino.visible}
        categoria={infoPergamino.categoria}
        close={() => setInfoPergamino({ ...infoPergamino, visible: false })}
      />
    </>
  );
}
