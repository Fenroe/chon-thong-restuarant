import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

export const TextSection = ({ children, id }) => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (inView && !visible) {
      setVisible(true);
    }
  }, [inView]);

  return (
    <section
      className={`text-section ${visible ? "visible" : "hidden"}`}
      id={id || ""}
      ref={ref}
    >
      <div className="text-section-inner-wrapper">{children}</div>
    </section>
  );
};
