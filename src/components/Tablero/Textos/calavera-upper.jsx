import { useEffect, useRef } from "preact/hooks";
import { animate } from "motion";

export default function ContenidoCalaveraUpper() {
  const elementRef = useRef(null);
  const frase =
    "Has tropezado con el Arcano XIII. El tiempo se detiene para que tu piel se vuelva hueso. No es el fin, es el despojo: deja aquí lo que te sobra y espera a que el ritmo te devuelva el aliento.";

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
