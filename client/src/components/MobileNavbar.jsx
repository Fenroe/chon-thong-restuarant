import { AiOutlineClose } from "react-icons/ai"
import { ModalPortal } from "./ModalPortal"
import { Link } from "react-router-dom"
import { useRef } from "react"
import { motion } from "framer-motion"

export const MobileNavbar = ({ closeModal }) => {
    const ref = useRef(null)
    return (
        <ModalPortal>
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-backdrop">
                <button onClick={closeModal}><AiOutlineClose /></button>
                <nav ref={ref} className="mobile-nav">
                    <Link onClick={closeModal} to="/#order">Order</Link>
                    <Link onClick={closeModal} to="/#about">About</Link>
                    <Link onClick={closeModal} to="/menu">Menu</Link>
                    <Link onClick={closeModal} to="/#reviews">Reviews</Link>
                    <Link onClick={closeModal} to="/#contact">Contact</Link>
                </nav>
            </motion.div>
        </ModalPortal>
    )
}
