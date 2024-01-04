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

  let image = percentScrolled < 0.325 ? 0 : percentScrolled < 0.825 ? 1 : 2;

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
          <h1 className="why-header">Why uwucrew?!</h1>
          <img className="why-image" src={uwu1} alt="uwu" />
          <h2 className="why-sub-header">Uniting the world through art! 🌍</h2>
          <p className="why-text">
            Fall down a rabbit hole of creativity and discover our global community, 
            including over 250+ anime artists! 
          </p>
          <img className="why-image" src={uwu2} alt="uwu" />
          <h2 className="why-mid-sub-header">Join The Anime Art Revolution! 🚀</h2>
          <p className="why-text">
            Be part of the wave that's defining our generation! 
            Lets create a culture where every creator shines, together!
          </p>
          <img className="why-image" src={uwu3} alt="uwu" />
          <h2 className="why-mid-sub-header">Enter the uwuminati 😎</h2>
          <p className="why-text">
            Find a crew that values creativity - connect with like-minded people who strive to make a positive impact on anime art!
          </p>
          <div className="why-buffer" />
        </div>
        <div className="why-cover" style={fixedStyles} />
      </div>
    </Section>
  );
};

export default Why;
