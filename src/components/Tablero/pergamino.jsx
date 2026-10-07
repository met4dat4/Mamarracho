import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "preact/compat";
import "./pergamino.css";
import { TEXTOS_PERGAMINO } from "./textos-pergamino.jsx";
import { ICONOS } from "./textos-pergamino.jsx";

export default function Pergamino({ idTexto, visible, categoria, close }) {
  const texto = TEXTOS_PERGAMINO[idTexto];
  const iconoUrl = ICONOS[categoria];

  return createPortal(
    <AnimatePresence>
      {visible && (
        <div class="overlayPergamino" onClick={close}>
          <motion.div
            id="contenidoPergamino"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{
              type: "tween", // Cambiamos a tween para control total del tiempo
              duration: 1.3, // Duración exacta de 800ms
              ease: "easeOut", // Opcional: suavizado de la curva
            }}
          >
            <img
              src="/pergamino.webp"
              alt=""
              onClick={(e) => e.stopPropagation()}
              className="pergamino-img"
            />
            <div className="info-contenido-pergamino">
              <img
                src={iconoUrl}
                alt=""
                onClick={(e) => e.stopPropagation()}
                className="icono-img"
              />
              <p>{texto}</p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
