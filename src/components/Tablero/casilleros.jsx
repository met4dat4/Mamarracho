import "./casilleros.css";

export default function Casilleros({ rotacion, idSeccion }) {
  return (
    <>
      <div class="grid-botones">
        <button class="casillero calavera-upper">
          <img
            src="/Casilleros/calavera-upper.webp"
            alt=""
            loading="lazy"
            decoding="async"
          />
        </button>
        <button class="casillero calavera-bottom">
          <img
            src="/Casilleros/calavera-bottom.webp"
            alt=""
            loading="lazy"
            decoding="async"
          />
        </button>
        <button class="casillero bola-upper">
          <img
            src="/Casilleros/bola-upper.webp"
            alt=""
            loading="lazy"
            decoding="async"
          />
        </button>
        <button class="casillero bola-bottom">
          <img
            src="/Casilleros/bola-bottom.webp"
            alt=""
            loading="lazy"
            decoding="async"
          />
        </button>
        <button class="casillero serpiente-upper">
          <img
            src="/Casilleros/serpiente-upper.webp"
            alt=""
            loading="lazy"
            decoding="async"
          />
        </button>
        <button class="casillero serpiente-bottom">
          <img
            src="/Casilleros/serpiente-bottom.webp"
            alt=""
            loading="lazy"
            decoding="async"
          />
        </button>
        <button class="casillero libro-bottom">
          <img
            src="/Casilleros/libro-bottom.webp"
            alt=""
            loading="lazy"
            decoding="async"
          />
        </button>
        <button class="casillero libro-upper">
          <img
            src="/Casilleros/libro-upper.webp"
            alt=""
            loading="lazy"
            decoding="async"
          />
        </button>
      </div>
    </>
  );
}
