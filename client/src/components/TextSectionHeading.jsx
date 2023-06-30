import React from 'react'
import { useIntersectionObserver } from '../hooks'

export const TextSectionHeading = ({ text, disableIntersection }) => {
    const { ref, visible } = useIntersectionObserver()

    if (disableIntersection) return <h1>{text}</h1>

    return (
        <h1
        ref={ref}
        className={`text-section-heading ${visible ? "visible" : "hidden"}`}>{text}</h1>
    )
}
