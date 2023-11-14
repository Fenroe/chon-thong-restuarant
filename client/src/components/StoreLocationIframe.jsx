import { useIntersectionObserver } from "../hooks";

export const StoreLocationIframe = () => {
  const { ref, visible } = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`iframe-wrapper ${visible ? "visible" : "hidden"}`}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1942.1585484531347!2d26.703260316135083!3d60.870926582224534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4691b36cba4d1857%3A0x6ad56e1bc2f0d752!2sThai%20Ravintola%20Chon%20Thong!5e0!3m2!1sen!2sfi!4v1688220331372!5m2!1sen!2sfi"
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};
