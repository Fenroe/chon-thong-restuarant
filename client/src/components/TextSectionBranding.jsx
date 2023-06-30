import { useIntersectionObserver } from "../hooks"

export const TextSectionBranding = () => {
    const { ref, visible } = useIntersectionObserver()

    return (
        <img
        ref={ref}
        src="/logo.jpg"
        alt="Chon Thong Thai Ravintola Kouvola"
        className={`text-section-branding ${visible ? "visible" : "hidden"}`}/>
    )
}
