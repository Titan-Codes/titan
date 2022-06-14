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
            <div className="copyright">
                <hr />
                <p>Copyright @<a href="https://github.com/Titan-Codes" target="_blank">TITAN</a></p>
                
            </div>
        </div>
    )
}

export default App;