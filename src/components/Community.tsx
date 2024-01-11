import "./Community.css";
import Section from "./Section";

import logo from "../assets/bunnyPrimary.png";
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

import { useEffect, useState } from "react";

const imageOptions = [
  "Rho.png",
  "Naninna.avif",
  "Alice.avif",
  "Alice.jpg",
  "farah.png",
  "Farah.avif",
  "Liga.avif",
  "Vanaric.avif",
  "Fei.avif",
  "Tuwu.avif",
  "Touge.avif",
  "Josh (1).jpg",
  "JG.avif",
  "Vixpora.jpg",
  "Imp.avif",
  "Adam.avif",
  "Liga.jpg",
  "Touge.png",
  "Shin (1).avif",
  "Palis.png",
  "Imp.jpg",
  "JG.png",
  "Nate.avif",
  "Suhate.jpg",
  "Neetori.jpeg",
  "Tuwu.jpg",
  "Cloudy.jpg",
  "Vanaric.png",
  "Fei.jpg",
  "Vixpora.avif",
  "Pawwao.png",
  "Adam.png",
  "Nate.jpg",
  "Rho.avif",
  "Naninna.jpg",
  "Shiomu.avif",
  "Pawwao.avif",
  "Josh.jpg",
  "Jess (1).jpg",
  "shiomu.png",
  "stuwu.avif",
  "Suhate.avif",
  "stuwu.png",
  "Jess.jpg",
  "Cloudy.avif",
  "Benangbaja.avif",
  "Benanbaja.jpg",
  "Shin.avif",
  "Palis.avif",
  "Neetori.avif",
];

interface UwuType {
  top: number; // Percentage of height (e.g 0.1 = 10%)
  side: number; // Percentage of height as left or right distance (e.g 0.1 = 10%)
  size: number; // Percentage of height as container (e.g 0.1 = 10%)
}

const uwus: UwuType[] = [
  {
    top: 0.1,
    side: 0.12,
    size: 0.1,
  },
  {
    top: 0.18,
    side: -0.05,
    size: 0.13,
  },
  {
    top: 0.25,
    side: 0.15,
    size: 0.12,
  },
  {
    top: 0.4,
    side: -0.05,
    size: 0.27,
  },
  {
    top: 0.65,
    side: 0.2,
    size: 0.18,
  },
  {
    top: 0.85,
    side: 0.3,
    size: 0.1,
  },
  {
    top: 0.8,
    side: 0.05,
    size: 0.1,
  },
];

const mobileUwus: UwuType[] = [
  {
    top: 0.3,
    side: -0.05,
    size: 0.13,
  },
  {
    top: 0.63,
    side: 0,
    size: 0.06,
  },
  {
    top: 0.76,
    side: 0.02,
    size: 0.07,
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
    name: "Twitter",
    link: TWITTER_LINK,
    icon: twitter,
  },
  {
    name: "Instagram",
    link: INSTAGRAM_LINK,
    icon: instagram,
  },
  {
    name: "Etherscan",
    link: ETHERSCAN_LINK,
    icon: etherscan,
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
];

const Community = () => {
  const [atBottom, setAtBottom] = useState(false);

  const startIndex = Math.floor(Math.random() * imageOptions.length);

  // set window listener to check if at bottom
  useEffect(() => {
    // set at bottom if at bottom
    const handleScroll = () => {
      const innerHeight = window.innerHeight;

      if (
        innerHeight + window.scrollY >=
        document.body.offsetHeight - innerHeight
      ) {
        setAtBottom(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Section id="community">
      <div className="community">
        {/* Background effects */}
        <div className="community-left-glow" />
        <div className="community-right-glow" />
        <div className="community-top-glow" />

        {/* Desktop uwus */}
        {uwus.map((uwu, index) => {
          const className = `community-desktop-uwu-container ${
            atBottom ? "community-animated" : ""
          }`;

          const firstIndex = (startIndex + index * 2) % imageOptions.length;
          const secondIndex =
            (startIndex + index * 2 + 1) % imageOptions.length;
          return (
            <div key={index}>
              <div
                className={className}
                style={{
                  top: `${uwu.top * 100}dvh`,
                  left: `${uwu.side * 100}dvh`,
                  width: `${uwu.size * 100}dvh`,
                  height: `${uwu.size * 100}dvh`,
                  animationDelay: `${Math.random() * 1}s`,
                }}
              >
                <img
                  className="community-uwu"
                  src={`/assets/community/${imageOptions[firstIndex]}`}
                  alt="uwu"
                />
              </div>
              <div
                className={className}
                style={{
                  top: `${uwu.top * 100}dvh`,
                  right: `${uwu.side * 100}dvh`,
                  width: `${uwu.size * 100}dvh`,
                  height: `${uwu.size * 100}dvh`,
                  animationDelay: `${Math.random() * 1}s`,
                }}
              >
                <img
                  className="community-uwu"
                  src={`/assets/community/${imageOptions[secondIndex]}`}
                  alt="uwu"
                />
              </div>
            </div>
          );
        })}

        {/* Mobile uwus */}
        {mobileUwus.map((uwu, index) => {
          const className = `community-mobile-uwu-container ${
            atBottom ? "community-animated" : ""
          }`;

          const firstIndex = (startIndex + index * 2) % imageOptions.length;
          const secondIndex =
            (startIndex + index * 2 + 1) % imageOptions.length;
          return (
            <div key={index}>
              <div
                className={className}
                style={{
                  top: `${uwu.top * 100}dvh`,
                  left: `${uwu.side * 100}dvh`,
                  width: `${uwu.size * 100}dvh`,
                  height: `${uwu.size * 100}dvh`,
                  animationDelay: `${Math.random() * 1}s`,
                }}
              >
                <img
                  className="community-uwu"
                  src={`/assets/community/${imageOptions[firstIndex]}`}
                  alt="uwu"
                />
              </div>
              <div
                className={className}
                style={{
                  top: `${uwu.top * 100}dvh`,
                  right: `${uwu.side * 100}dvh`,
                  width: `${uwu.size * 100}dvh`,
                  height: `${uwu.size * 100}dvh`,
                  animationDelay: `${Math.random() * 1}s`,
                }}
              >
                <img
                  className="community-uwu"
                  src={`/assets/community/${imageOptions[secondIndex]}`}
                  alt="uwu"
                />
              </div>
            </div>
          );
        })}

        {/* Content */}
        <div className="community-top-buffer" />
        <div className="community-content">
          <img
            src={logo}
            alt="uwucrew icon"
            className="community-content-image"
          />
          <div className="community-content-header">
            Be part of the community
          </div>
          <Button
            link={DISCORD_LINK}
            label="Join our Discord!"
            icon={whiteDiscord}
          />
        </div>

        {/* Footer */}
        <div className="community-footer">
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
