import React from "react";
import "./header.scss";
import CTA from "./CTA";
import ME from "../../Assets/me.png";
import HeaderSocial from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I&apos;m</h5>
        <h1>Gabriel Trzimajewski</h1>
        <h5 className="text-light">FrontEnd Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
