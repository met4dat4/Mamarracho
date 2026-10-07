import { motion } from "framer-motion";

export default function ContenidoBolaBottom() {
  const frase =
    "Aquel que el mundo llama Mamarracho, es quien ha desatado sus hilos; bajo el disfraz del desorden, tu alma danza en la única frecuencia que la jaula no puede captar.";

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.1, duration: 2, ease: "easeOut" }} // Podés ajustar la duración acá
    >
      <p className="info-simple">{frase}</p>
    </motion.article>
  );
}
