import Carousel from "../../../layouts/Carousel";

const imagenes = [
  "/PORFOLIOS/01-MARTIN.webp",
  "/PORFOLIOS/02-ELIAS.webp",
  "/PORFOLIOS/03-ARI.webp",
  "/PORFOLIOS/04-PIKU.webp",
  "/PORFOLIOS/05-MONO.webp",
  "/PORFOLIOS/06-JOA.webp",
  "/PORFOLIOS/07-XAVI.webp",
  "/PORFOLIOS/08-FLOR.webp",
  "/PORFOLIOS/09-POLA.webp",
  "/PORFOLIOS/10-DANI.webp",
];

export default function SeccionPortfolios({ close }) {
  return <Carousel close={close} imagenes={imagenes} scroll={true} />;
}
