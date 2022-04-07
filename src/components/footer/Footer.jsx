import React from 'react';
import './footer.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsLinkedin, BsWhatsapp } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Gabriel Trzimajewski
      </a>

      <ul className="permalinks">
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        {/* <a href="#services">Services</a> */}
        <a href="#portfolio">Portfolio</a>
        <a href="#reviews">Reviews</a>
        <a href="#contact">Contact</a>
      </ul>

      <div className="footer__socials">
        <a href="mailto:gabrieltrz2005@gmail.com">
          <MdOutlineEmail />
        </a>
        <a href="https://www.linkedin.com/in/gabriel-trzimajewski/">
          <BsLinkedin />
        </a>
        <a href="https://api.whatsapp.com/send?phone=+5547988330284">
          <BsWhatsapp />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Sn0wye/Gabriel Trzimajewski. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
