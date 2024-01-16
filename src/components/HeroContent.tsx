import "./HeroContent.css";

import { DISCORD_LINK, SOCIALS } from "../app/globals";
import discordIcon from "../assets/socials/discord.svg";
import Button from "./Button";

const HeroContent = () => {
  return (
    <div className="container">
      <div className="hero-content">
        <div className="hero-column">
          <h3 className="hero-content-header">
            Welcome to uwucrew:<br/>immerse yourself into the future of anime art 🌐✨
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
            Become part of a global effort that empowers anime artists and fans in innovative ways!
          </p>
          <Button
            label="Visit our Discord!"
            outLink={DISCORD_LINK}
            icon={discordIcon}
          />
          <div className="socials-container-mobile">
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
      </div>
    </div>
  );
};

export default HeroContent;
