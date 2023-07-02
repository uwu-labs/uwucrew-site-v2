import { MutableRefObject, useEffect, useState } from "react";

const useScrollData = (containerRef: MutableRefObject<HTMLDivElement>) => {
  const [location, setLocation] = useState<"above" | "in" | "below">("above");
  const [percentScrolled, setPercentScrolled] = useState(0);

  const onScroll = () => {
    if (!containerRef || !containerRef.current) return false;
    const rect = containerRef.current.getBoundingClientRect();
    if (rect.top > 0) setLocation("above");
    else if (rect.top <= 0 && rect.bottom >= window.innerHeight)
      setLocation("in");
    else setLocation("below");

    const percentScrolled_ = Math.min(
      Math.max((rect.top * -1) / window.innerHeight, 0),
      1
    );
    setPercentScrolled(percentScrolled_);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
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
