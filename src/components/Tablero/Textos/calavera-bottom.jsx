import { useEffect, useRef } from "preact/hooks";
import { animate } from "motion";

export default function ContenidoCalaveraBottom() {
  const elementRef = useRef(null);
  const frase =
    "Caer es solo el ritual que el destino te exige para que aprendas a caminar sin gravedad. No te lamentes por la piel que dejaste en el suelo; la calavera es el molde donde se forja tu nueva corona. Levántate, que el vacío no te ha tragado, solo te ha hecho espacio.";

  useEffect(() => {
    if (elementRef.current) {
      animate(
        elementRef.current,
        { opacity: [0, 1] },
        { delay: 1.1, duration: 1.1, easing: "ease-out" }
      );
    }
  }, []);

  return (
    <article ref={elementRef} style={{ opacity: 0 }}>
      <p className="info-simple">{frase}</p>
    </article>
  );
}
