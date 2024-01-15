import "./Header.css";

import logo from "../assets/logo.svg";
import opensea from "../assets/socials/opensea.svg";
import hamburger from "../assets/ui/hamburger.svg";

import Button from "./Button";
import { OPENSEA_LINK } from "../app/globals";
import { useState } from "react";

interface NavItemType {
  label: string;
  href: string;
}

const navItems: NavItemType[] = [
  {
    label: "Art Gallery",
    href: "/gallery",
  },
  {
    label: "Dressing Room",
    href: "https://dressingroom.uwucrew.art/",
  },
];

const Header = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  return (
    <div className="header">
      <div className="section">
        <a href="/">
          <img className="logo" src={logo} alt="uwucrew logo" />
        </a>
        <div className="nav-items">
          {navItems.map((navItem) => (
            <a className="nav-item" href={navItem.href} key={navItem.href}>
              {navItem.label}
            </a>
          ))}
        </div>
      </div>
      <div className="header-buy-on-opensea">
        <Button label="Buy on OpenSea" link={OPENSEA_LINK} icon={opensea} />
      </div>
      <button
        className="header-hamburger"
        onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
      >
        <img
          className="header-hamburger-icon"
          src={hamburger}
          alt="hamburger menu"
        />
      </button>
      {
        // Render hamburger menu
        isHamburgerOpen && (
          <>
            <div className="header-hamburger-menu">
              {navItems.map((navItem) => (
                <a
                  className="header-hamburger-menu-item"
                  href={navItem.href}
                  key={navItem.href}
                >
                  {navItem.label}
                </a>
              ))}
              <div className="header-hamburger-button-container">
                <Button
                  label="Buy on OpenSea"
                  link={OPENSEA_LINK}
                  icon={opensea}
                />
              </div>
            </div>
            <button
              className="header-drop-shadow"
              onClick={() => setIsHamburgerOpen(false)}
            />
          </>
        )
      }
    </div>
  );
};

export default Header;
