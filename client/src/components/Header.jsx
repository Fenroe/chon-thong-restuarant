import { useHashScroll } from "../hooks"
import { useState } from "react"
import { Link } from "react-router-dom"
import { MobileNavbar } from "./MobileNavbar"
import { BiMenuAltRight } from "react-icons/bi"
import { AnimatePresence } from "framer-motion"

export const Header = () => {
    const [showModal, setShowModal] = useState(false)

    useHashScroll()

    return (
        <header>
            <nav>
                <Link to="/#order">Order</Link>
                <Link to="/#about">About</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/#reviews">Reviews</Link>
                <Link to="/#contact">Contact</Link>
            </nav>
            <button onClick={() => setShowModal(true)}>
                <BiMenuAltRight />
            </button>
            <AnimatePresence>
                {showModal && <MobileNavbar closeModal={() => setShowModal(false)}/>}
            </AnimatePresence>
        </header>
    )
}
