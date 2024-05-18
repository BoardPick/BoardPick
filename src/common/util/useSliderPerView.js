import { useEffect, useState } from "react";

export const useSlidesPerView = (gameTabRef) => {
  const [slidesPerView, setSlidesPerView] = useState(null);

  const calculateSlidesPerView = () => {
    const gameTabWidth = gameTabRef.current.offsetWidth;
    if (gameTabWidth >= 375 && gameTabWidth <= 400) {
      return 2.3;
    } else if (gameTabWidth <= 600 && gameTabWidth >= 540) {
      return 3.5;
    } else {
      return 2.7;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (gameTabRef.current) {
        setSlidesPerView(calculateSlidesPerView());
      }
    };
    setSlidesPerView(calculateSlidesPerView());

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [gameTabRef]);

  return slidesPerView;
};
