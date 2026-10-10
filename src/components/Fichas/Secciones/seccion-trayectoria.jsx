import Carousel from "../../../layouts/Carousel";

const imagenes = [
  "/Trayectoria/01 MAS DE MI PANTANO.webp",
  "/Trayectoria/02 vivo y los 7 lagos.webp",
  "/Trayectoria/03 RULANDO CORAJE.webp",
  "/Trayectoria/04 37.webp",
  "/Trayectoria/05 MAMARRACHO.webp",
];

export default function SeccionPortfolios({ close }) {
  return <Carousel close={close} imagenes={imagenes} />;
}
