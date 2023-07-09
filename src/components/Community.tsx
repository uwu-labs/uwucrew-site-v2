import "./Community.css";
import Section from "./Section";

import discord from "../assets/socials/footer/discord.svg";
import etherscan from "../assets/socials/footer/etherscan.svg";
import instagram from "../assets/socials/footer/instagram.svg";
import medium from "../assets/socials/footer/medium.svg";
import opensea from "../assets/socials/footer/opensea.svg";
import twitter from "../assets/socials/footer/twitter.svg";
import {
  DISCORD_LINK,
  ETHERSCAN_LINK,
  INSTAGRAM_LINK,
  MEDIUM_LINK,
  OPENSEA_LINK,
  TWITTER_LINK,
} from "../app/globals";

interface SocialType {
  name: string;
  link: string;
  icon: string;
}

const socials: SocialType[] = [
  {
    name: "Discord",
    link: DISCORD_LINK,
    icon: discord,
  },
  {
    name: "Etherscan",
    link: ETHERSCAN_LINK,
    icon: etherscan,
  },
  {
    name: "Instagram",
    link: INSTAGRAM_LINK,
    icon: instagram,
  },
  {
    name: "Medium",
    link: MEDIUM_LINK,
    icon: medium,
  },
  {
    name: "OpenSea",
    link: OPENSEA_LINK,
    icon: opensea,
  },
  {
    name: "Twitter",
    link: TWITTER_LINK,
    icon: twitter,
  },
];

const Community = () => {
  return (
    <Section id="community">
      <div className="community">
        {/* Background effects */}
        <div className="community-left-glow" />
        <div className="community-right-glow" />
        <div className="community-top-glow" />

        {/* Content */}
        <div />
        <div />
        <div className="community-footer">
          <div className="community-footer-text">All rights reserved</div>
          <div className="community-footer-text">{`© ${new Date().getFullYear()}`}</div>
          <div className="community-footer-socials">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="community-footer-social-link"
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  className="community-footer-social-image"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Community;
