import "./seccion.css";
import { motion } from "framer-motion";

export default function Seccion({ close, idSeccion, rotacionInicial }) {
  return (
    <div class="overlay" onClick={close}>
      <motion.div
        layoutId={`carta-${idSeccion}`}
        id="contenido"
        onClick={(e) => e.stopPropagation()}
        initial={{ rotate: rotacionInicial }} // Empieza como estaba la tarjeta
        animate={{ rotate: 0 }} // Termina derecha
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          mass: 1,
        }}
      >
        <h3>
          Holaa aa a aaaa soy la seccion de la banda aaaa aca cantamos todos
          juntos
        </h3>
      </motion.div>
    </div>
  );
}
