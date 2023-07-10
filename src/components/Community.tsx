import "./Community.css";
import Section from "./Section";

import logo from "../assets/icon.svg";
import Button from "./Button";
import {
  DISCORD_LINK,
  ETHERSCAN_LINK,
  INSTAGRAM_LINK,
  MEDIUM_LINK,
  OPENSEA_LINK,
  TWITTER_LINK,
} from "../app/globals";

import discord from "../assets/socials/footer/discord.svg";
import etherscan from "../assets/socials/footer/etherscan.svg";
import instagram from "../assets/socials/footer/instagram.svg";
import medium from "../assets/socials/footer/medium.svg";
import opensea from "../assets/socials/footer/opensea.svg";
import twitter from "../assets/socials/footer/twitter.svg";

import whiteDiscord from "../assets/socials/discord.svg";

import uwu01 from "../assets/community/01.png";
import uwu02 from "../assets/community/02.png";
import uwu03 from "../assets/community/03.png";
import uwu04 from "../assets/community/04.png";
import uwu05 from "../assets/community/05.png";
import uwu06 from "../assets/community/06.png";
import uwu07 from "../assets/community/07.png";
import uwu08 from "../assets/community/08.png";
import uwu09 from "../assets/community/09.png";
import uwu10 from "../assets/community/10.png";
import uwu11 from "../assets/community/11.png";
import uwu12 from "../assets/community/12.png";
import uwu13 from "../assets/community/13.png";
import uwu14 from "../assets/community/14.png";
import uwu15 from "../assets/community/15.png";
import uwu16 from "../assets/community/16.png";

interface UwuType {
  leftImage: string;
  rightImage: string;
  top: number; // Percentage of height (e.g 0.1 = 10%)
  side: number; // Percentage of height as left or right distance (e.g 0.1 = 10%)
  size: number; // Percentage of height as container (e.g 0.1 = 10%)
}

const uwus: UwuType[] = [
  {
    leftImage: uwu01,
    rightImage: uwu02,
    top: 0.1,
    side: 0.12,
    size: 0.1,
  },
  {
    leftImage: uwu03,
    rightImage: uwu04,
    top: 0.18,
    side: -0.05,
    size: 0.13,
  },
  {
    leftImage: uwu05,
    rightImage: uwu06,
    top: 0.25,
    side: 0.15,
    size: 0.12,
  },
  {
    leftImage: uwu07,
    rightImage: uwu08,
    top: 0.4,
    side: -0.05,
    size: 0.27,
  },
  {
    leftImage: uwu09,
    rightImage: uwu10,
    top: 0.5,
    side: 0.35,
    size: 0.1,
  },
  {
    leftImage: uwu11,
    rightImage: uwu12,
    top: 0.65,
    side: 0.2,
    size: 0.18,
  },
  {
    leftImage: uwu13,
    rightImage: uwu14,
    top: 0.75,
    side: 0.5,
    size: 0.1,
  },
  {
    leftImage: uwu15,
    rightImage: uwu16,
    top: 0.8,
    side: 0.05,
    size: 0.1,
  },
];

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

        {/* uwus */}
        {uwus.map((uwu) => (
          <img
            key={uwu.leftImage}
            className="community-uwu"
            style={{
              top: `${uwu.top * 100}vh`,
              left: `${uwu.side * 100}vh`,
              width: `${uwu.size * 100}vh`,
              height: `${uwu.size * 100}vh`,
            }}
            src={uwu.rightImage}
            alt="uwu"
          />
        ))}

        {uwus.map((uwu) => (
          <img
            key={uwu.leftImage}
            className="community-uwu"
            style={{
              top: `${uwu.top * 100}vh`,
              right: `${uwu.side * 100}vh`,
              width: `${uwu.size * 100}vh`,
              height: `${uwu.size * 100}vh`,
            }}
            src={uwu.rightImage}
            alt="uwu"
          />
        ))}

        {/* Content */}
        <div />
        <div className="community-content">
          <img
            src={logo}
            alt="uwucrew icon"
            className="community-content-image"
          />
          <div className="community-content-header">Join the community</div>
          <Button
            link={DISCORD_LINK}
            label="Join our Discord"
            icon={whiteDiscord}
          />
        </div>

        {/* Footer */}
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
