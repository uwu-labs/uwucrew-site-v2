import "./Why.css";

import Section from "./Section";
import { useRef } from "react";

import uwu1 from "../assets/why/01.jpg";
import uwu2 from "../assets/why/02.jpg";
import uwu3 from "../assets/why/03.jpg";
import useFixedStyles from "../hooks/use-scroll-data";

const images = [uwu1, uwu2, uwu3];

const Why = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { fixedStyles, percentScrolled } = useFixedStyles(containerRef);

  const image = Math.min(
    Math.floor(percentScrolled * images.length),
    images.length - 1
  );

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
          <img className="why-image" src={uwu1} alt="uwu" />
          <h2 className="why-sub-header">Discover a world of creativity</h2>
          <p className="why-text">
            Unlock a vibrant and artistic world and get to know the 250+ artists
            in the uwu community!
          </p>
          <img className="why-image" src={uwu2} alt="uwu" />
          <h2 className="why-sub-header">Join the anime art movement</h2>
          <p className="why-text">
            Join a movement to highlight creativity and make a lasting impact on
            anime art by discovering and connecting with artists!
          </p>
          <img className="why-image" src={uwu3} alt="uwu" />
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
