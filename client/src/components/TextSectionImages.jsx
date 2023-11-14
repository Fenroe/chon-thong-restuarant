export const TextSectionImages = ({ imageData }) => {
  return (
    <div className={`text-section-images`}>
      {imageData.map((image) => (
        <img
          key={`${image.id}${image.src}${image.alt}`}
          src={image.src}
          alt={image.alt}
          className="image"
        />
      ))}
    </div>
  );
};
