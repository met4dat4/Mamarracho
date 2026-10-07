import { motion } from "framer-motion";

export default function ContenidoCalaveraBottom() {
  const frase =
    "Caer es solo el ritual que el destino te exige para que aprendas a caminar sin gravedad. No te lamentes por la piel que dejaste en el suelo; la calavera es el molde donde se forja tu nueva corona. Levántate, que el vacío no te ha tragado, solo te ha hecho espacio.";

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
