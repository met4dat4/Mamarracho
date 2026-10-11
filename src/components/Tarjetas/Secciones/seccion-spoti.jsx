import { useEffect, useState, useRef } from "react";

let spotifyApiPromise = null;

const loadSpotifyApi = () => {
  if (window.IFrameAPI) return Promise.resolve(window.IFrameAPI);
  if (spotifyApiPromise) return spotifyApiPromise;

  if (!document.getElementById("spotify-iframe-api")) {
    const spotifyApiScript = document.createElement("script");
    spotifyApiScript.id = "spotify-iframe-api";
    spotifyApiScript.src = "https://open.spotify.com/embed/iframe-api/v1";
    spotifyApiScript.async = true;
    document.body.appendChild(spotifyApiScript);
  }

  spotifyApiPromise = new Promise((resolve) => {
    window.onSpotifyIframeApiReady = (IFrameSpotify) => {
      window.IFrameAPI = IFrameSpotify;
      resolve(IFrameSpotify);
    };
  });

  return spotifyApiPromise;
};

export default function Spoti() {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const controllerRef = useRef(null);

  useEffect(() => {
    const checkResize = () => setIsMobile(window.innerWidth <= 1024);
    checkResize();
    window.addEventListener("resize", checkResize);
    return () => window.removeEventListener("resize", checkResize);
  }, []);

  useEffect(() => {
    let isMounted = true;

    loadSpotifyApi().then((IFrameAPI) => {
      if (!isMounted || !containerRef.current) return;

      containerRef.current.innerHTML = "";

      IFrameAPI.createController(
        containerRef.current,
        {
          width: "100%",
          height: isMobile ? "152" : "352",
          uri: "spotify:artist:4aJKBbhKK6pLGC3G20c02C",
          theme: "dark",
        },
        (embedController) => {
          if (!isMounted) {
            embedController.destroy();
            return;
          }
          controllerRef.current = embedController;

          embedController.addListener("playback_started", () => {
            const backgroundAudio = document.getElementById("background-audio");
            if (backgroundAudio) backgroundAudio.pause();
          });

          embedController.addListener("playback_update", (e) => {
            const backgroundAudio = document.getElementById("background-audio");
            if (!backgroundAudio) return;

            if (e.data.isPaused) {
              backgroundAudio.play().catch(() => {});
            }
          });
        }
      );
    });

    return () => {
      isMounted = false;
      if (controllerRef.current && typeof controllerRef.current.destroy === "function") {
        try {
          controllerRef.current.destroy();
        } catch (e) {
          // Ignoramos si ya fue destruido
        }
        controllerRef.current = null;
      }

      const backgroundAudio = document.getElementById("background-audio");
      if (backgroundAudio) {
        backgroundAudio.play().catch(() => {});
      }
    };
  }, [isMobile]);

  return (
    <div
      style={{
        border: "2px solid rgba(255, 195, 77, 1)",
        borderRadius: "12px",
        display: "inline-block",
        width: "60%",
      }}
    >
      <div ref={containerRef} />
    </div>
  );
}
