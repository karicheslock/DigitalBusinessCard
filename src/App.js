import React from "react"
import Intro from "./Intro.js"
import About from "./About.js"
import Footer from "./Footer.js"
import './App.css';

export default function App() {
    return(
        <div className="main-content">
            <Intro />
            <About />
            <Footer />
        </div> 
    )
}
