import ContenidoLibroUpper from "./Textos/libro-upper.jsx";
import ContenidoLibroBottom from "./Textos/libro-bottom.jsx";
import ContenidoSerpienteUpper from "./Textos/serpiente-upper.jsx";
import ContenidoSerpienteBottom from "./Textos/serpiente-bottom.jsx";
import ContenidoCalaveraBottom from "./Textos/calavera-bottom.jsx";
import ContenidoCalaveraUpper from "./Textos/calavera-upper.jsx";
import ContenidoBolaBottom from "./Textos/bola-bottom.jsx";
import ContenidoBolaUpper from "./Textos/bola-upper.jsx";

export const TEXTOS_PERGAMINO = {
  "calavera-upper": <ContenidoCalaveraUpper />,
  "calavera-bottom": <ContenidoCalaveraBottom />,
  "bola-upper": <ContenidoBolaUpper />,
  "bola-bottom": <ContenidoBolaBottom />,
  "serpiente-upper": <ContenidoSerpienteUpper />,
  "serpiente-bottom": <ContenidoSerpienteBottom />,
  "libro-upper": <ContenidoLibroUpper />,
  "libro-bottom": <ContenidoLibroBottom />,
};

export const ICONOS = {
  calavera: "/ICONO Calavera.webp",
  bola: "/ICONO Bola.webp",
  serpiente: "/ICONO Serpiente.webp",
  libro: "/ICONO Libro.webp",
};
