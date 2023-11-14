import { useIntersectionObserver } from "../hooks";

export const TextSectionLinks = ({ linkData }) => {
  const { ref, visible } = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`text-section-links ${visible ? "viisble" : "hidden"}`}
    >
      {linkData.map((link) => (
        <a
          target="_blank"
          rel="noopener noreferrer"
          key={`${link.id}${link.href}${link.text}`}
          href={link.href}
        >
          {link.text}
        </a>
      ))}
    </div>
  );
};
