import { useState } from 'react'
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className="h-full min-h-screen">
        {/* //<NavTop /> */}
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Work />
        <Footer />
        {/* <Contact /> */}
      </div>
    </BrowserRouter>

  )
}

export default App
