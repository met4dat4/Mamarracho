import { motion } from "framer-motion";

export default function ContenidoBolaUpper() {
  const frase =
    "Lo que el barro esconde, la voz lo transmuta: no eres el náufrago del pantano, sino quien diseña y construye puentes con el eco de sus propias sombras.";

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
