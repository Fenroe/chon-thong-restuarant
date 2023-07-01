import ReactDOM from "react-dom"
import { useModalScroll } from "../hooks"

export const ModalPortal = ({
    children
}) => {
    const modalRoot = document.getElementById('modal')
    useModalScroll()
    return ReactDOM.createPortal(children, modalRoot)
}