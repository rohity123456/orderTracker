import React from "react";
import BrandLogo from "../../../images/BrandLogo.svg";
import "./css/Header.css";
const Header = () => {
  return (
    <header className="bottomShadowcontainer">
      <img src={BrandLogo} alt="" className="cursorpointer" />
    </header>
  );
};

export default Header;
