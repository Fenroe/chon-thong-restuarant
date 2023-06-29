import { Home, About, Menu, Contact } from "./pages"
import { Header } from "./components"
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom'

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
            </Switch>
        </Router>
    )
}

export default App
