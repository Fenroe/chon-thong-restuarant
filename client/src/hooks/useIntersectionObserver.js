import { useInView } from "react-intersection-observer"
import { useState, useEffect } from "react"

export const useIntersectionObserver = () => {
    const { ref, inView } = useInView({ threshold: 0 })

    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (inView && !visible) {
            setVisible(true)
        }
    }, [inView])

    return {
        ref, visible
    }
}