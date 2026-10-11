import { useState } from "preact/hooks";
import "./ficha.css";

export default function Ficha({ id, imagenSrc, ModalComponent }) {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <div className="ficha" id={id} onClick={() => setOpened(true)}>
        <img
          src={imagenSrc}
          alt=""
          loading="eager"
          fetchpriority="high"
        />
    </div>
      {opened && <ModalComponent close={() => setOpened(false)} />}
    </>
  );
}
