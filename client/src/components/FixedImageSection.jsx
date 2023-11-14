import { useState } from "react";
import { AiOutlineMail, AiOutlineInstagram } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import { Link } from "react-router-dom";

export const FixedImageSection = ({
  extraClassName,
  isLink,
  headingText,
  linkUrl,
  showIcons,
  id,
}) => {
  const [mouseNearIcons, setMouseNearIcons] = useState(false);

  return (
    <section className={`image-wrapper ${extraClassName}`} id={id}>
      {isLink ? (
        <div className="image-wrapper-heading heading-link">
          <Link onClick={() => sessionStorage.clear()} to={linkUrl}>
            {headingText}
          </Link>
        </div>
      ) : (
        <div className="image-wrapper-heading">
          <h1>{headingText}</h1>
        </div>
      )}
      {showIcons && (
        <div
          onMouseEnter={() => setMouseNearIcons(true)}
          onMouseLeave={() => setMouseNearIcons(false)}
          className={`social-media-icons ${
            mouseNearIcons ? "mouse-entered" : ""
          }`}
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:thairavintolachonthong@gmail.com"
            className="social-media-icon"
          >
            <AiOutlineMail />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/thairavintolachonthong/"
            className="social-media-icon"
          >
            <AiOutlineInstagram />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/ThaiRavintolaKouvola/"
            className="social-media-icon"
          >
            <GrFacebookOption />
          </a>
        </div>
      )}
    </section>
  );
};
