import { useIntersectionObserver } from "../hooks"

export const TextSectionLinks = ({ linkData }) => {
    const { ref, visible } = useIntersectionObserver()

    return (
        <div
        ref={ref}
        className={`links-wrapper ${visible ? "viisble" : "hidden"}`}>
            {linkData.map((link) =>
            <a
            key={`${link.id}${link.href}${link.text}`}
            href={link.href}>
                {link.text}
            </a>)}
        </div>
    )
}
