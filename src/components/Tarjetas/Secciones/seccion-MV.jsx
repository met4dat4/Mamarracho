import { useEffect, useState } from "preact/hooks";

export default function MV() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 1024);
    check();
    window.addEventListener("resize", check);

    let player;
    let scriptTag;

    const onYouTubeIframeAPIReady = () => {
      player = new window.YT.Player("youtube-player", {
        events: {
          onStateChange: (event) => {
            const backgroundAudio = document.getElementById("background-audio");
            if (!backgroundAudio) return;

            if (event.data === window.YT.PlayerState.PLAYING) {
              backgroundAudio.pause();
            }
            else if (
              event.data === window.YT.PlayerState.PAUSED ||
              event.data === window.YT.PlayerState.ENDED
            ) {
              backgroundAudio.play().catch(() => {});
            }
          },
        },
      });
    };

    // Si la API ya cargó previamente, la inicializamos directo
    if (window.YT && window.YT.Player) {
      onYouTubeIframeAPIReady();
    } else {
      // Si no, inyectamos el script de YouTube
      window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
      scriptTag = document.createElement("script");
      scriptTag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(scriptTag, firstScriptTag);
    }

    // 3. Limpieza al desmontar el componente
    return () => {
      window.removeEventListener("resize", check);
      // Si salimos de la sección y el video estaba sonando, reanudamos el audio de fondo
      const backgroundAudio = document.getElementById("background-audio");
      if (backgroundAudio) {
        backgroundAudio.play().catch(() => {});
      }
    };
  }, []);

  return (
    <iframe
      id="youtube-player"
      style={{
        border: "2px solid rgba(255, 195, 77, 1)",
      }}
      width={isMobile ? "280" : "560"}
      height={isMobile ? "157" : "315"}
      src="https://www.youtube.com/embed/tfEhg7kGoEM?si=jqCrWq_DG9PcRpcT&enablejsapi=1"
      frameBorder="1"
    />
  );
}
