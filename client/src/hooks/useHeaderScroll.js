import { useEffect, useState } from "react"

export const useHeaderScroll = () => {
    const [scrollTop, setScrollTop] = useState(0)

    const [scrollingDown, setScrollingDown] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY
            setScrollingDown(scrollTop < scrollPosition)
            setScrollTop(scrollPosition)
        }

        document.addEventListener('scroll', handleScroll)

        return () => document.removeEventListener('scroll', handleScroll)
    }, [])

    return scrollingDown
}