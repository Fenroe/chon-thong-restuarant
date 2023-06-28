import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <header>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/info">Info</Link>
        </nav>
    </header>
  )
}
