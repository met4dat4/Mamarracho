import { motion } from "framer-motion";

export default function EfectoEscritura({
  texto,
  velocidad = 0.05,
  delayAdicional = 0,
}) {
  const letras = Array.from(texto);

  const contenedorVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: velocidad,
        delayChildren: delayAdicional,
      },
    },
  };

  const letraVariants = {
    hidden: { opacity: 0, display: "none" },
    visible: {
      opacity: 1,
      display: "inline",
    },
  };

  return (
    <motion.span
      variants={contenedorVariants}
      initial="hidden"
      animate="visible"
    >
      {letras.map((letra, index) => (
        <motion.span key={index} variants={letraVariants}>
          {letra}
        </motion.span>
      ))}
    </motion.span>
  );
}
