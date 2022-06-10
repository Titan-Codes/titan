import React from "react";

function Navbar() {
  const imageUrl = "https://cdn.discordapp.com/attachments/743817386792058971/984121645352517702/myAvatarCircle.png";

  return (
    <nav className="navbar">
      <div className="logo navbar-brand navbar-text" style={{color: "black"}}>
        TITAN
      </div>
      <ul className="navlinks">
        <input type="checkbox" id="checkbox_toggle" />
        <label for="checkbox_toggle" class="hamburger">&#9776;</label>
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