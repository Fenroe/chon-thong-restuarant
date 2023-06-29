import React from 'react'
import { useIntersectionObserver } from '../hooks'

export const TextSectionParagraph = ({ text, disableIntersection }) => {
    const { ref, visible } = useIntersectionObserver()

    if (disableIntersection) return <p>{text}</p>

    return (
        <p
        ref={ref}
        className={`${visible ? "visible" : "hidden"}`}>{text}</p>
    )
}
