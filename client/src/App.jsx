import { Home, Menu } from "./pages"
import { Header, ResetScrollWrapper } from "./components"
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom'

const App = () => {
    return (
        <Router>
            <ResetScrollWrapper>
                <Header />
                <Switch>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                </Switch>
            </ResetScrollWrapper>
        </Router>
    )
}

export default App
