import React from "react";

function Navbar(){
    const imageUrl = "https://cdn.discordapp.com/attachments/743817386792058971/984121645352517702/myAvatarCircle.png";
    return (
        <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
        Vedansh
      {/* <img className="logo" src={imageUrl} width="112" height="28" /> */}
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>

      <a class="navbar-item">
        About
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
          Projects
          </a>
          <a class="navbar-item">
            Skills
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-outlined is-rounded">
            <strong>Say Hello</strong>
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
    )
}

export default Navbar;