import React from "react";
import Navbar from "./Navbar";
import Home from './Home';
import About from "./About";
import Skills from "./Skills";

function App(){
    return (
        <div>
            <Navbar />
            <Home />
            <About />
            <Skills />
        </div>
    )
}

export default App;