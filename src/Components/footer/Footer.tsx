import React from "react";
import "./footer.scss";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { Link } from "../styled/Button";

const Footer = () => {
  return (
    <footer>
      <Link
        color="bg"
        aria-label="Go back to the top"
        href="#"
        className="footer__logo"
      >
        Gabriel Trzimajewski
      </Link>

      <ul className="permalinks">
        <li>
          <Link color="bg" href="#">
            Home
          </Link>
        </li>
        <li>
          <Link color="bg" href="#about">
            About
          </Link>
        </li>
        <li>
          <Link color="bg" href="#experience">
            Experience
          </Link>
        </li>
        {/* <a href="#services">Services</a> */}
        <li>
          <Link color="bg" href="#portfolio">
            Portfolio
          </Link>
        </li>
        <li>
          <Link color="bg" href="#reviews">
            Reviews
          </Link>
        </li>
        <li>
          <Link color="bg" href="#contact">
            Contact
          </Link>
        </li>
      </ul>

      <div className="footer__socials">
        <Link
          aria-label="Send me an email"
          href="mailto:gabrielsnowye@gmail.com"
          color="bg"
        >
          <MdOutlineEmail />
        </Link>
        <Link
          aria-label="LinkedIn Profile"
          href="https://www.linkedin.com/in/gabriel-trzimajewski/"
          color="bg"
        >
          <BsLinkedin />
        </Link>
      </div>

      <div className="footer__copyright">
        <small>&copy; Sn0wye/Gabriel Trzimajewski. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
