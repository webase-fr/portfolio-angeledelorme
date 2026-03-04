import dark32 from "./favicon_io_dark/favicon-32x32.png";
import darkApple from "./favicon_io_dark/apple-touch-icon.png";

export default function Head() {
  return (
    <>
      {/* Favicon par défaut (sera surchargé côté client par FaviconSwitcher) */}
      <link rel="icon" type="image/png" sizes="32x32" href={dark32.src} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={darkApple.src}
      />
    </>
  );
}

