import Ficha from "./ficha.jsx";
import SeccionPortfolios from "./Secciones/seccion-portfolios.jsx";

export default function FichaBruja() {
  return (
    <Ficha id="bruja" imagenSrc="/Bruja.webp" ModalComponent={SeccionPortfolios} />
  );
}
