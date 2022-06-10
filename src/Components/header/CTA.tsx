import React from "react";
import CV from "../../Assets/CV - Gabriel Trzimajewski.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a
        href={CV}
        download
        className="btn"
        aria-label="Download my Curriculum Vitae"
      >
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary" aria-label="Contact me">
        Contact
      </a>
    </div>
  );
};

export default CTA;
