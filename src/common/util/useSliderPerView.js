import { useEffect, useState } from "react";

export const useSlidesPerView = (gameTabRef) => {
  const [slidesPerView, setSlidesPerView] = useState(3.5);

  const calculateSlidesPerView = () => {
    const gameTabWidth = gameTabRef.current.offsetWidth;
    console.log(gameTabWidth);
    if (gameTabWidth >= 375 && gameTabWidth <= 400) {
      return 2.5;
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
  }, [gameTabRef.current]);

  return slidesPerView;
};

export const useSlidesPerViewPick = (gameTabRef) => {
  const [slidesPerView, setSlidesPerView] = useState({});

  const calculateSlidesPerView = () => {
    const gameTabWidth = gameTabRef.current.offsetWidth;
    if (gameTabWidth >= 375 && gameTabWidth <= 400) {
      return 4;
    } else if (gameTabWidth <= 600 && gameTabWidth >= 540) {
      return 7.3;
    } else {
      return 5;
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
