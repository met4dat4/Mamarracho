import { animate } from "motion";
import { useEffect, useRef } from "preact/hooks";

export default function ContenidoBolaUpper() {
  const elementRef = useRef(null);
  const frase =
    "Lo que el barro esconde, la voz lo transmuta: no eres el náufrago del pantano, sino quien diseña y construye puentes con el eco de sus propias sombras.";

  useEffect(() => {
    if (elementRef.current) {
      animate(
        elementRef.current,
        { opacity: [0, 1] },
        { delay: 1.1, duration: 1.1, easing:"ease-out" }
      );
    }
  }, []);

  return (
    <article ref={elementRef} style={{ opacity: 0 }}>
      <p className="info-simple">{frase}</p>
    </article>
  );
}
