import "./UwucrewFooter.css";

import logo from "../assets/logo.svg";
import { SOCIALS } from "../app/globals";
import assetUrl from "../utils/assetUrl";

const UwucrewFooter = () => (
  <footer id="home-footer" className="uwucrew-footer">
    <div className="uwucrew-footer-content">
      <a href="/">
        <img
          className="uwucrew-footer-logo"
          src={assetUrl(logo)}
          alt="uwucrew logo"
        />
      </a>
      <div className="uwucrew-footer-socials">
        {SOCIALS.map((social) => (
          <a
            key={social.name}
            className="uwucrew-footer-social-link"
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
          >
            <img
              className="uwucrew-footer-social-image"
              src={assetUrl(social.image)}
              alt=""
            />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default UwucrewFooter;
