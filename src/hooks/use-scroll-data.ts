import { MutableRefObject, useEffect, useState } from "react";

const FPS = 20;

const useScrollData = (containerRef: MutableRefObject<HTMLDivElement>) => {
  const [location, setLocation] = useState<"above" | "in" | "below">("above");
  const [percentScrolled, setPercentScrolled] = useState(0);

  const onScroll = () => {
    if (!containerRef || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let location_;
    if (rect.top > 0) location_ = "above";
    else if (rect.top <= 0 && rect.bottom >= window.innerHeight)
      location_ = "in";
    else location_ = "below";
    setLocation(location_);

    const areaHeight = rect.height - window.innerHeight;
    const percentScrolled_ = Math.min(
      Math.max((rect.top * -1) / areaHeight, 0),
      1
    );
    setPercentScrolled(percentScrolled_);
  };

  useEffect(() => {
    setInterval(onScroll, 1000 / FPS);
  }, []);

  const fixedStyles = {
    position: (location === "in" ? "fixed" : "absolute") as any,
    top: location !== "below" ? "0" : "auto",
    bottom: location === "below" ? "0" : "auto",
  };

  return {
    fixedStyles,
    percentScrolled,
  };
};

export default useScrollData;
