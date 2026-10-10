import { useEffect, useRef } from "preact/hooks";
import { animate } from "motion";

export default function ContenidoBolaBottom() {
  const elementRef = useRef(null);
  const frase =
    "Aquel que el mundo llama Mamarracho, es quien ha desatado sus hilos; bajo el disfraz del desorden, tu alma danza en la única frecuencia que la jaula no puede captar.";

  useEffect(() => {
    if (elementRef.current) {
      animate(
        elementRef.current,
        { opacity: [0, 1] },
        { delay: 1.1, duration: 2, easing: "ease-out" }
      );
    }
  }, []);

  return (
    <article ref={elementRef} style={{ opacity: 0 }}>
      <p className="info-simple">{frase}</p>
    </article>
  );
}
