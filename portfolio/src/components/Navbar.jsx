import React from "react";

function Navbar() {
  // document.querySelector("#burger").addEventListener("click", () => {
  //   document.querySelector("#navbar-links").classList.toggle("is-active")
  // })
  document.querySelector("#burger").addEventListener("click", () => {
    document.querySelector("#navbar-links").classList.toggle("is-active");
  });
  const imageUrl = "https://cdn.discordapp.com/attachments/743817386792058971/984121645352517702/myAvatarCircle.png";
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="#">
          <span style={{ color: "rgb(111, 20, 175)" }}>TITAN</span>
          {/* <img className="logo" src={imageUrl} width="112" height="28" /> */}
        </a>

        <a id="burger" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbar-links" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">
            <span className="navbar-text">Home</span>
          </a>

          <a class="navbar-item">
            <span className="navbar-text">About</span>
          </a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              <span className="navbar-text">More</span>
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item">
                <span className="navbar-text">Projects</span>
              </a>
              <a class="navbar-item">
                <span className="navbar-text">Skills</span>
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