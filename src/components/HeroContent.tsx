import "./HeroContent.css";

import { MINT_KUSARI_LINK, SOCIALS } from "../app/globals";
import globe from "../assets/socials/globe.svg";
import Button from "./Button";

const HeroContent = () => {
  return (
    <div className="container">
      <div className="hero-content">
        <div className="hero-column">
          <h3 className="hero-content-header">
            welcome to uwucrew:
            <br />
            immerse yourself into the future of anime art 🌐✨
          </h3>
          <div className="socials-container">
            <div className="socials-text">find us on</div>
            {SOCIALS.map((social) => (
              <a
                href={social.url}
                target="_blank"
                rel="noreferrer"
                key={social.name}
              >
                <img
                  className="social"
                  src={social.image}
                  alt={social.name}
                  loading="eager"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="hero-column">
          <p className="hero-content-text">
            uwucrew is part of the kusari family. help us on our mission to
            empower creativity onchain!
          </p>
          <Button
            label="visit our website!"
            outLink={MINT_KUSARI_LINK}
            icon={globe}
          />
          <div className="socials-container-mobile">
            <div className="socials-text">find us on</div>
            {SOCIALS.map((social) => (
              <a
                href={social.url}
                target="_blank"
                rel="noreferrer"
                key={social.name}
              >
                <img
                  className="social"
                  src={social.image}
                  alt={social.name}
                  loading="eager"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
