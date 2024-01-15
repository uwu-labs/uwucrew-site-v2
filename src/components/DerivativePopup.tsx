import "./DerivativePopup.css";
import type { DerivativeType } from "../config/derivatives";
import ExitButton from "./ExitButton";

interface Props {
  derivative: DerivativeType;
  show: boolean;
  close: () => void;
  image: string;
}

const DerivativePopup = ({ derivative, show, close, image }: Props) => {
  if (!show) return null;

  return (
    <div className="styled-derivative-popup">
      <button className="derivative-popup-background" onClick={() => close()} />
      <div className="derivative-popup-popup">
        <img className="derivative-popup-image" src={image} />
        <div className="derivative-popup-sidebar">
          <ExitButton color="black" action={close} />
          {derivative.id && (
            <div className="derivative-popup-row">
              <div className="derivative-popup-header">uwucrew:</div>
              <a
                className="derivative-popup-link"
                href={`https://opensea.io/assets/ethereum/0xf75140376d246d8b1e5b8a48e3f00772468b3c0c/${derivative.id}`}
                target="_blank"
              >
                {`#${derivative.id}`}
              </a>
            </div>
          )}
          {derivative.artistName && derivative.artistLink && (
            <div className="derivative-popup-row">
              <div className="derivative-popup-header">Artist:</div>
              <a
                className="derivative-popup-link"
                href={derivative.artistLink}
                target="_blank"
              >
                {derivative.artistName} B
              </a>
            </div>
          )}
          {derivative.post && (
            <div className="derivative-popup-row">
              <div className="derivative-popup-header">Post:</div>
              <a
                className="derivative-popup-link"
                href={derivative.post}
                target="_blank"
              >
                Twitter
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DerivativePopup;
