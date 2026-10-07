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
        src="https://open.spotify.com/embed/track/4gCHuLE0LgeYx9bhEq6xo0?utm_source=generator&theme=0"
        width="100%"
        height={isMobile ? 152 : 352}
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>
      <p>
        <strong>Más que un "Te quiero"</strong>: Artísticamente, Rohayhu en{" "}
        <strong>Kodenove</strong> representa un compromiso existencial. No es un
        afecto pasajero; es "yo vierto mi vida en ti". Es la energía que impulsa
        al creador a pasar horas puliendo un video o una canción: el amor por la
        obra y por quien la recibe.
      </p>
    </article>
  );
}
