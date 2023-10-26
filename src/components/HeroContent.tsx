import "./HeroContent.css";

import { OPENSEA_LINK, SOCIALS } from "../app/globals";
import openseaIcon from "../assets/socials/opensea.svg";
import Button from "./Button";

const HeroContent = () => {
  return (
    <div className="container">
      <div className="hero-content">
        <div className="hero-column">
          <h3 className="hero-content-header">
            Join uwucrew and immerse yourself in a captivating world of anime
            art
          </h3>
          <div className="socials-container">
            <div className="socials-text">Find us on</div>
            {SOCIALS.map((social) => (
              <a
                href={social.url}
                target="_blank"
                rel="noreferrer"
                key={social.name}
              >
                <img className="social" src={social.image} alt={social.name} />
              </a>
            ))}
          </div>
        </div>

        <div className="hero-column">
          <p className="hero-content-text">
            Find your place in a passionate community of anime art enthusiasts,
            where artists and collectors can connect over their shared love for
            anime art!
          </p>
          <Button
            label="View on OpenSea!"
            link={OPENSEA_LINK}
            icon={openseaIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
