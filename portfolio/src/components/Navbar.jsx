import React from "react";

function Navbar() {

  return (
    <nav className="navbar">
      <div className="logo navbar-brand navbar-text" style={{color: "black"}}>
        TITAN | PORTFOLIO
      </div>
      <ul className="navlinks">
        <input type="checkbox" id="checkbox_toggle" />
        <label for="checkbox_toggle" class="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </label>
        <div id="dropdown" className="menu">
          <li><a href="#home" className="items links navbar-text" onClick={() => {document.querySelector("#checkbox_toggle").click()}}>Home</a></li>
          <li><a href="#about" className="items links navbar-text" onClick={() => {document.querySelector("#checkbox_toggle").click()}}>About</a></li>
          <li><a href="#skills" className="items links navbar-text" onClick={() => {document.querySelector("#checkbox_toggle").click()}}>Skills</a></li>
          <li><a href="#projects" className="items links navbar-text" onClick={() => {document.querySelector("#checkbox_toggle").click()}}>Projects</a></li>
          <hr />
          <button className="button is-rounded">Say Hello!</button>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar;