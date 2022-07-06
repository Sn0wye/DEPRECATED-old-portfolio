import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { Link } from "../styled/Button";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <Link
        href="https://www.linkedin.com/in/gabriel-trzimajewski/"
        target="_blank"
        rel="noreferrer"
        aria-label="Linkedin Profile"
      >
        <BsLinkedin />
      </Link>
      <Link
        href="https://github.com/sn0wye"
        target="_blank"
        rel="noreferrer"
        aria-label="Github Profile"
      >
        <FaGithub />
      </Link>
    </div>
  );
};

export default HeaderSocials;
