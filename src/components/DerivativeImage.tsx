import "./DerivativeImage.css";
import { useState } from "react";
import type { DerivativeType } from "../config/derivatives";
import DerivativePopup from "./DerivativePopup";

const magicImageLinkTransform = (link: string, large = false): string => {
  // If it is a Twitter image
  if (link.includes("https://pbs.twimg.com/media")) {
    const coreLink = link.split("?")[0];
    return `${coreLink}?format=jpg&name=${large ? "large" : "small"}`;
  }
  return link;
};

interface Props {
  derivative: DerivativeType;
}

const DerivativeImage = ({ derivative }: Props) => {
  const [popup, setPopup] = useState(false);

  return (
    <>
      <div className="derivative-image-container">
        <img
          className="derivative-image-image"
          src={magicImageLinkTransform(derivative.image)}
        />
        <div className="derivative-image-overlay">
          <button
            className="derivative-image-overlay-background"
            onClick={() => setPopup(true)}
          />
          <div className="overlay-row top-row">
            {derivative.id && (
              <a
                className="derivative-image-link"
                href={`https://opensea.io/assets/ethereum/0xf75140376d246d8b1e5b8a48e3f00772468b3c0c/${derivative.id}`}
                target="_blank"
              >{`uwucrew #${derivative.id}`}</a>
            )}
          </div>
          <div className="overlay-row bottom-row">
            {derivative.artistLink && derivative.artistName && (
              <a
                className="derivative-image-link"
                target="_blank"
                href={derivative.artistLink}
              >
                {derivative.artistName}
              </a>
            )}
            {derivative.post && (
              <a
                className="derivative-image-link"
                target="_blank"
                href={derivative.post}
              >
                Twitter Post
              </a>
            )}
          </div>
        </div>
      </div>
      <DerivativePopup
        derivative={derivative}
        show={popup}
        close={() => setPopup(false)}
        image={magicImageLinkTransform(derivative.image, true)}
      />
    </>
  );
};

export default DerivativeImage;
