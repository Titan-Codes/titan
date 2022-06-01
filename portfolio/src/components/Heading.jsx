import React from "react";
import Icons from "./Icons";

function Heading(){
    return (
        <section className="first-section" id="home">
            <div className="heading-div">
                <h1 className="heading"><i class="fa-solid fa-terminal"></i> Hello, I'm TITAN</h1>
                <Icons />
            </div>
        </section>
    )
}

export default Heading;