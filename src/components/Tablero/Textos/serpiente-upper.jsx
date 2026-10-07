import { useEffect, useState } from "preact/hooks";

export default function ContenidoSerpienteUpper() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <article class="ritual">
      <iframe
        data-testid="embed-iframe"
        style="border-radius:12px"
        src="https://open.spotify.com/embed/track/7s1kMle1W2dD60MENDMG9q?utm_source=generator&theme=0"
        width="100%"
        height={isMobile ? 152 : 352}
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>
      <p>
        <strong>La Libido</strong> es el momento en que el concepto de{" "}
        <strong>Kodenove</strong> deja de ser una idea abstracta y se convierte
        en una <strong>necesidad física</strong>. Es el impulso que te obliga a
        moverte, a crear y a devorar el momento.
      </p>
    </article>
  );
}
