import {BrowserRouter , Routes , Route} from "react-router-dom"
import Home from "./pages/Home"
import Signin from "./pages/Signin"
import SignUp from "./pages/SignUp"
import Dashboard from "./pages/Dashboard"
import Projects from "./pages/Projects"
import About from "./pages/About"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/About " element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
