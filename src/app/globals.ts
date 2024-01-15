// Importing logos
import twitterLogo from "../assets/socials/sub/twitter.svg";
import instagramLogo from "../assets/socials/sub/instagram.svg";
import openseaLogo from "../assets/socials/sub/opensea.svg";
import mediumLogo from "../assets/socials/sub/medium.svg";
import etherscanLogo from "../assets/socials/sub/etherscan.svg";

const PROJECT = "uwucrew-thumbnails";
const STORAGE_URL = `https://firebasestorage.googleapis.com/v0/b/${PROJECT}/o/`;
export const uwuImage = (uwuId: number) => {
  return `${STORAGE_URL}${uwuId.toString()}.png?alt=media`;
};

// Constants
export const ADDRESS = "0xf75140376d246d8b1e5b8a48e3f00772468b3c0c";

// Links
export const TWITTER_LINK = "https://twitter.com/uwucrewnft";
export const DISCORD_LINK = "https://discord.gg/uwucrew";
export const INSTAGRAM_LINK = "https://www.instagram.com/uwucrew.art/";
export const MEDIUM_LINK = "https://mirror.xyz/uwucrew.eth";
export const ETHERSCAN_LINK = `https://etherscan.io/address/${ADDRESS}`;
export const OPENSEA_LINK = "https://opensea.io/collection/uwucrew";
export const MIRROR_LINK = "https://mirror.xyz/uwucrew.eth/";

// Socials
export interface SocialType {
  name: string;
  url: string;
  image: string;
}
export const SOCIALS: SocialType[] = [
  {
    name: "Twitter",
    url: TWITTER_LINK,
    image: twitterLogo,
  },
  {
    name: "Instagram",
    url: INSTAGRAM_LINK,
    image: instagramLogo,
  },
  {
    name: "Mirror",
    url: MEDIUM_LINK,
    image: mediumLogo,
  },
  {
    name: "OpenSea",
    url: OPENSEA_LINK,
    image: openseaLogo,
  },
  {
    name: "Etherscan",
    url: ETHERSCAN_LINK,
    image: etherscanLogo,
  },
];
