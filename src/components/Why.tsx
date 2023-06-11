import "./Why.css";

import Section from "./Section";
import { useEffect, useRef, useState } from "react";

import uwu1 from "../assets/why/01.jpg";
import uwu2 from "../assets/why/02.jpg";
import uwu3 from "../assets/why/01.jpg";
import uwu4 from "../assets/why/02.jpg";

const images = [uwu1, uwu2, uwu3];

const Why = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [location, setLocation] = useState<"above" | "in" | "below">("above");
  const [image, setImage] = useState(0);

  const onScroll = () => {
    if (!containerRef.current) return false;

    // Handling the state of the fixed element
    const rect = containerRef.current.getBoundingClientRect();
    if (rect.top > 0) setLocation("above");
    else if (rect.top <= 0 && rect.bottom >= window.innerHeight)
      setLocation("in");
    else setLocation("below");

    // Handlin the changing of the image
    const percentScrolled = Math.min(
      Math.max((rect.top * -1) / window.innerHeight, 0),
      1
    );
    const image = Math.min(
      Math.floor(percentScrolled * images.length),
      images.length - 1
    );
    setImage(image);
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

  return (
    <Section id="why">
      <div className="why" ref={containerRef}>
        <div className="why-fixed" style={fixedStyles}>
          <div className="why-gradient" />
          <div className="why-fixed-image-container">
            <img src={images[image]} alt="uwu" className="why-fixed-image" />
          </div>
        </div>
        <div className="why-content">
          <h1 className="why-header">Why uwucrew</h1>
          <h2 className="why-sub-header">Discover a world of creativity</h2>
          <p className="why-text">
            Unlock a vibrant and artistic world and get to know the 250+ artists
            in the uwu community!
          </p>
          <h2 className="why-sub-header">Join the anime art movement</h2>
          <p className="why-text">
            Join a movement to highlight creativity and make a lasting impact on
            anime art by discovering and connecting with artists!
          </p>
          <h2 className="why-sub-header">Become a member of the uwuminati</h2>
          <p className="why-text">
            Gain access to the uwuminati holder-only chat and form meaningful
            connections with fellow anime fans and creators!
          </p>
          <div className="why-buffer" />
        </div>
        <div className="why-cover" style={fixedStyles} />
      </div>
    </Section>
  );
};

export default Why;
