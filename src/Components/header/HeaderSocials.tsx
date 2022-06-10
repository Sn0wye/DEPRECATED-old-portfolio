import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/gabriel-trzimajewski/"
        target="_blank"
        rel="noreferrer"
        aria-label="Linkedin Profile"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/sn0wye"
        target="_blank"
        rel="noreferrer"
        aria-label="Github Profile"
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
