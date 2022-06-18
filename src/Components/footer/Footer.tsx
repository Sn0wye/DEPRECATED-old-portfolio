import React from "react";
import "./footer.scss";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a aria-label="Go back to the top" href="#" className="footer__logo">
        Gabriel Trzimajewski
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        {/* <a href="#services">Services</a> */}
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#reviews">Reviews</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a aria-label="Send me an email" href="mailto:gabrieltrz2005@gmail.com">
          <MdOutlineEmail />
        </a>
        <a
          aria-label="LinkedIn Profile"
          href="https://www.linkedin.com/in/gabriel-trzimajewski/"
        >
          <BsLinkedin />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Sn0wye/Gabriel Trzimajewski. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
