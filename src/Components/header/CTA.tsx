import React from "react";
import CV from "../../Assets/CV - Gabriel Trzimajewski.pdf";
import { Link } from "../styled/Button";

const CTA = () => {
  return (
    <div className="cta">
      <Link
        type="button"
        color="primary"
        href="#contact"
        aria-label="Contact me"
      >
        Contact
      </Link>
    </div>
  );
};

export default CTA;
