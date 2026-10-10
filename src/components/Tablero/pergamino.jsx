import { useEffect, useRef, useState } from "preact/hooks";
import { createPortal } from "preact/compat";
import { animate } from "motion";
import "./pergamino.css";
import { TEXTOS_PERGAMINO, ICONOS } from "./textos-pergamino.jsx";

export default function Pergamino({ idTexto, visible, categoria, close }) {
  const texto = TEXTOS_PERGAMINO[idTexto];
  const iconoUrl = ICONOS[categoria];

  const modalRef = useRef(null);
  const overlayRef = useRef(null);

  // Animación de entrada al montarse/abrirse
  useEffect(() => {
    if (visible && modalRef.current && overlayRef.current) {
      animate(
        overlayRef.current,
        { opacity: [0, 1] },
        { duration: 0.4 }
      );
      animate(
        modalRef.current,
        { y: ["100%", "0%"], opacity: [0, 1] },
        { duration: 1.3, easing: "ease-out" }
      );
    }
  }, [visible]);

  if (!visible) return null;

  const handleClose = () => {
    // Animación de salida antes de desmontar
    if (modalRef.current && overlayRef.current) {
      animate(
        overlayRef.current,
        { opacity: [1, 0] },
        { duration: 0.8 }
      );
      animate(
        modalRef.current,
        { y: ["0%", "100%"], opacity: [1, 0] },
        { duration: 0.8, easing: "ease-in" }
      );
    }
    setTimeout(() => {
      close();
    }, 800);
  };

  return createPortal(
    <div
      ref={overlayRef}
      className="overlayPergamino"
      onClick={handleClose}
      style={{ opacity: 0 }}
    >
      <div
        ref={modalRef}
        id="contenidoPergamino"
        style={{ transform: "translateY(100%)", opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src="/pergamino.webp"
          alt=""
          className="pergamino-img"
        />
        <div className="info-contenido-pergamino">
          <img
            src={iconoUrl}
            alt=""
            className="icono-img"
          />
          <p>{texto}</p>
        </div>
      </div>
    </div>,
    document.body
  );
}
