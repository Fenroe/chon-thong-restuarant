import { useIntersectionObserver } from "../hooks"

export const TextSectionImages = ({ imageData }) => {
    const { ref, visible } = useIntersectionObserver()

    return (
        <div
        ref={ref}
        className={`images-grid-wrapper ${visible ? "visible" : "hidden"}`}>
            {imageData.map((image) =>
            <img
            key={`${image.id}${image.src}${image.alt}`}
            src={image.src}
            alt={image.alt}
            className="image"/>)}
        </div>
    )
}