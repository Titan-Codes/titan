import React from "react";

function Home(){
    const imageUrl = "https://cdn.discordapp.com/attachments/743817386792058971/984121645352517702/myAvatarCircle.png";
    return (
        <section id="home" className="home">
            <div className="home-section">
                <h1 className="home-heading">Full-Stack Developer, Python Programmer</h1>
                <p className="home-text">I make websites, code stuff with python and I love to code.</p>
                <img className="avatar" src={imageUrl} />
            </div>
        </section>
    )
}

export default Home;