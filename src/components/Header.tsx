import "./Header.css";

import logo from "../assets/logo.svg";
import opensea from "../assets/socials/opensea.svg";
import Button from "./Button";
import { OPENSEA_LINK } from "../app/globals";

interface NavItemType {
  label: string;
  href: string;
}

const navItems: NavItemType[] = [
  {
    label: "Art Gallery",
    href: "/derivatives",
  },
  {
    label: "Dressing Room",
    href: "/dressing-room",
  },
];

const Header = () => {
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
      <div className="section">
        <Button label="Buy on OpenSea" link={OPENSEA_LINK} icon={opensea} />
      </div>
    </div>
  );
};

export default Header;
