export default function Spoti() {
  return (
    <iframe
      style={{
        border: "2px solid rgba(255, 195, 77, 1)",
        borderRadius: "12px",
      }}
      data-testid="embed-iframe"
      src="https://open.spotify.com/embed/artist/4aJKBbhKK6pLGC3G20c02C?utm_source=generator&theme=0"
      width="60%"
      height="152"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      frameBorder="1"
      referrerpolicy="no-referrer-when-downgrade"
      loading="lazy"
    ></iframe>
  );
}
