import { Home, About, Menu, Info } from "./pages"
import { Header, Footer } from "./components"
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom'

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/info" element={<Info />} />
            </Switch>
            <Footer />
        </Router>
    )
}

export default App
