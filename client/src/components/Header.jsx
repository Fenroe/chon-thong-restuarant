import { useHashScroll } from "../hooks"
import { Link } from "react-router-dom"

export const Header = () => {
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
        </header>
    )
}
