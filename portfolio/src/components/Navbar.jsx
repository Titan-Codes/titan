import React from "react";

function Navbar() {

  const checkbox = document.querySelector("input[name=checkbox]");
  const items = document.querySelector(".items");

  return (
    <nav className="navbar">
      <div className="logo navbar-brand navbar-text" style={{color: "black"}}>
        TITAN
      </div>
      <ul className="navlinks">
        <input type="checkbox" id="checkbox_toggle" />
        <label for="checkbox_toggle" class="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </label>
        <div id="dropdown" className="menu">
          <li><a href="#home" className="items links navbar-text">Home</a></li>
          <li><a href="#" className="items links navbar-text">About</a></li>
          <li><a href="#" className="items links navbar-text">Skills</a></li>
          <li><a href="#" className="items links navbar-text">Projects</a></li>
          <button className="button is-rounded">Say Hello</button>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar;