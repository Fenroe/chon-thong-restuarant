import { useIntersectionObserver } from "../hooks"

export const TextSectionBranding = ({ disableIntersection }) => {
    const { ref, visible } = useIntersectionObserver()

    if (disableIntersection) {
        return (
            <img
            src="/logo.jpg"
            alt="Chon Thong Thai Ravintola Kouvola"
            className="text-section-branding" />
        )
    }

    return (
        <img
        ref={ref}
        src="/logo.jpg"
        alt="Chon Thong Thai Ravintola Kouvola"
        className={`text-section-branding ${visible ? "visible" : "hidden"}`}/>
    )
}
