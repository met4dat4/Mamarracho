import { useEffect, useState } from "preact/hooks";

export default function MV() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <iframe
      style={{
        border: "2px solid rgba(255, 195, 77, 1)",
      }}
      width={isMobile ? "280" : "560"}
      height={isMobile ? "157" : "315"}
      src="https://www.youtube.com/embed/tfEhg7kGoEM?si=jqCrWq_DG9PcRpcT"
      frameBorder="1"
    />
  );
}
