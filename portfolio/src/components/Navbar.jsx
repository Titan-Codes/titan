import React from "react";

function Navbar() {
  const imageUrl = "https://cdn.discordapp.com/attachments/743817386792058971/984121645352517702/myAvatarCircle.png";

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
        <div className="menu">
          <li><a className="items navbar-text">Home</a></li>
          <li><a className="items navbar-text">About</a></li>
          <li><a className="items navbar-text">Skills</a></li>
          <li><a className="items navbar-text">Projects</a></li>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar;