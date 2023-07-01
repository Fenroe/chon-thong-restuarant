import { useEffect } from "react"

export const useModalScroll = () => {
    useEffect(() => {
        const html = document.getElementsByTagName('html')[0]
        const body = document.body
        const root = document.getElementById('root')
        html.classList.add('overflow-hidden')
        body.classList.add('overflow-hidden')
        root.classList.add('overflow-hidden')

        return () => {
            html.classList.remove('overflow-hidden')
            body.classList.remove('overflow-hidden')
            root.classList.remove('overflow-hidden')
        }
    }, [])
}