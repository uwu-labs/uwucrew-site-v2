import "./Header.css";

import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="uwucrew logo" />
    </div>
  );
};

export default Header;
