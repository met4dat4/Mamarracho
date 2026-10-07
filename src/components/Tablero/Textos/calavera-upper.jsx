import { motion } from "framer-motion";

export default function ContenidoCalaveraUpper() {
  const frase =
    "Has tropezado con el Arcano XIII. El tiempo se detiene para que tu piel se vuelva hueso. No es el fin, es el despojo: deja aquí lo que te sobra y espera a que el ritmo te devuelva el aliento.";

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
