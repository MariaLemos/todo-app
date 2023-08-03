import { useState, useEffect } from "react";

function getWindowWidth() {
  const { innerWidth: width } = window;
  return width;
}

export default function useIsMobile() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowWidth());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowWidth());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions < 600;
}
