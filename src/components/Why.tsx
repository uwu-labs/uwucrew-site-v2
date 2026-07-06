import "./Why.css";

import Section from "./Section";
import { useRef } from "react";

import uwu1 from "../assets/why/01.webp";
import uwu2 from "../assets/why/02.webp";
import uwu3 from "../assets/why/03.webp";
import useFixedStyles from "../hooks/use-scroll-data";
import assetUrl from "../utils/assetUrl";

const imageCredits = ["@edaelec", "@KRY_Peach", "@tsuru_oden"];

const Why = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { fixedStyles, percentScrolled } = useFixedStyles(containerRef);

  let image = percentScrolled < 0.2 ? 0 : percentScrolled < 0.75 ? 1 : 2;

  return (
    <Section id="why">
      <div className="why" ref={containerRef}>
        <div className="why-fixed" style={fixedStyles}>
          <div className="why-gradient" />
          <div className="why-fixed-image-container">
            <img
              src={assetUrl(uwu1)}
              alt="uwu"
              loading="eager"
              className={`why-fixed-image ${image == 0 ? "why-active" : ""}`}
            />
            <img
              src={assetUrl(uwu2)}
              alt="uwu"
              className={`why-fixed-image ${image == 1 ? "why-active" : ""}`}
            />
            <img
              src={assetUrl(uwu3)}
              alt="uwu"
              className={`why-fixed-image ${image == 2 ? "why-active" : ""}`}
            />
            <a
              href={`https://twitter.com/${imageCredits[image]}`}
              target="_blank"
              rel="noopener noreferrer"
              className="why-image-credit"
            >
              {imageCredits[image]}
            </a>
          </div>
        </div>
        <div className="why-content">
          <h1 className="why-header">why uwucrew?!</h1>
          <div className="why-image-container">
            <img className="why-image" src={assetUrl(uwu1)} alt="uwu" loading="eager" />
            <a
              href={`https://twitter.com/${imageCredits[0]}`}
              target="_blank"
              rel="noopener noreferrer"
              className="why-image-credit"
            >
              {imageCredits[0]}
            </a>
          </div>
          <h2 className="why-sub-header">born from love 💖</h2>
          <p className="why-text">
            uwucrew is the genesis onchain art collection of Kusari, funded by
            people passionate about anime art
          </p>
          <div className="why-image-container">
            <img className="why-image" src={assetUrl(uwu2)} alt="uwu" loading="eager" />
            <a
              href={`https://twitter.com/${imageCredits[1]}`}
              target="_blank"
              rel="noopener noreferrer"
              className="why-image-credit"
            >
              {imageCredits[1]}
            </a>
          </div>
          <h2 className="why-mid-sub-header">uniting the world with art 🌏</h2>
          <p className="why-text">
            fall down a rabbit hole of creativity and join the Kusari
            community, home to over 250+ global artists!
          </p>
          <div className="why-image-container">
            <img className="why-image" src={assetUrl(uwu3)} alt="uwu" loading="eager" />
            <a
              href={`https://twitter.com/${imageCredits[2]}`}
              target="_blank"
              rel="noopener noreferrer"
              className="why-image-credit"
            >
              {imageCredits[2]}
            </a>
          </div>
          <h2 className="why-mid-sub-header">join the family 🤗</h2>
          <p className="why-text">
            the uwucrew community is a living expression of onchain technology
            enabling all of us to connect in unique ways
          </p>
          <div className="why-buffer" />
        </div>
        <div className="why-cover" style={fixedStyles} />
      </div>
    </Section>
  );
};

export default Why;
