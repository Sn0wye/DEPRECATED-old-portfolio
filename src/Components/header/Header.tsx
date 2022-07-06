import React from "react";
import "./header.scss";
import CTA from "./CTA";
import ME from "../../Assets/me.png";
import HeaderSocial from "./HeaderSocials";
import { ScrollDownLink } from "./style";

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
          <img src={ME} alt="Gabriel Trzimajewski Photo" />
        </div>

        <ScrollDownLink href="#contact">Scroll Down</ScrollDownLink>
      </div>
    </header>
  );
};

export default Header;
