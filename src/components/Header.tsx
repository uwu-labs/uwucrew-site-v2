import "./Header.css";

import logo from "../assets/logo.svg";

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
        <img className="logo" src={logo} alt="uwucrew logo" />
        <div className="nav-items">
          {navItems.map((navItem) => (
            <a className="nav-item" href={navItem.href} key={navItem.href}>
              {navItem.label}
            </a>
          ))}
        </div>
      </div>
      <div className="section">meow</div>
    </div>
  );
};

export default Header;
