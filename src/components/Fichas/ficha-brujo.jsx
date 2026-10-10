import Ficha from "./ficha.jsx";
import SeccionTrayectoria from "./Secciones/seccion-trayectoria.jsx";

export default function FichaBrujo() {
  return (
    <Ficha id="brujo" imagenSrc="/Brujo.webp" ModalComponent={SeccionTrayectoria} />
  );
}
