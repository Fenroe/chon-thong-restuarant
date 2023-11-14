import { useState } from "react";
import { AiOutlineMail, AiOutlineInstagram } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";

export const Footer = () => {
  const [mouseNearIcons, setMouseNearIcons] = useState(false);

  return (
    <footer>
      <div
        onMouseEnter={() => setMouseNearIcons(true)}
        onMouseLeave={() => setMouseNearIcons(false)}
        className={`footer-social-media-icons ${
          mouseNearIcons ? "mouse-entered" : ""
        }`}
      >
        <a
          href="mailto:thairavintolachonthong@gmail.com"
          className="social-media-icon"
        >
          <AiOutlineMail />
        </a>
        <a href="" className="social-media-icon">
          <AiOutlineInstagram />
        </a>
        <a href="" className="social-media-icon">
          <GrFacebookOption />
        </a>
      </div>
    </footer>
  );
};
