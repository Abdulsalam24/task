import { Route, Routes } from "react-router-dom";

import Welcome from './components/Welcome'
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";

import { Link } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <nav>
        <ul>
          <li> <Link to="/">Home</Link></li>
          <li> <Link to="/about">about</Link></li>
          <li>  <Link to="/contact">contact</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Welcome name="ABD"/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App;
