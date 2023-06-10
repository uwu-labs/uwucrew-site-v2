import "./Why.css";

import Section from "./Section";
import { useEffect, useRef, useState } from "react";

import uwu1 from "../assets/why/01.jpg";

const Why = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [location, setLocation] = useState<"above" | "in" | "below">("above");

  const onScroll = () => {
    if (!containerRef.current) return false;
    const rect = containerRef.current.getBoundingClientRect();
    if (rect.top > 0) setLocation("above");
    else if (rect.top <= 0 && rect.bottom >= window.innerHeight)
      setLocation("in");
    else setLocation("below");
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  console.log(location);

  return (
    <Section id="why">
      <div className="why" ref={containerRef}>
        <div
          className="why-fixed"
          style={{
            position: location === "in" ? "fixed" : "absolute",
            top: location !== "below" ? 0 : "auto",
            bottom: location === "below" ? 0 : "auto",
          }}
        >
          <div className="why-gradient" />
          <div className="why-fixed-image-container">
            <img src={uwu1} alt="uwu" className="why-fixed-image" />
          </div>
        </div>
        <div className="why-content">meow</div>
      </div>
    </Section>
  );
};

export default Why;
