import { useEffect, useState } from "react";

const useScrollData = (
  containerRef: { current: HTMLDivElement | null }
) => {
  const [location, setLocation] = useState<"above" | "in" | "below">("above");
  const [percentScrolled, setPercentScrolled] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      let location_: "above" | "in" | "below";
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

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [containerRef]);

  const fixedStyles = {
    position: (location === "in" ? "fixed" : "absolute") as const,
    top: location !== "below" ? "0" : "auto",
    bottom: location === "below" ? "0" : "auto",
  };

  return {
    fixedStyles,
    percentScrolled,
  };
};

export default useScrollData;
