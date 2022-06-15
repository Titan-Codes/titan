import React from "react";
import Progressbar from "./Progressbar";

function Skills() {
    return (
        <section id="skills" className="skills">
            <div className="skills-section">
            <h1 className="skills-heading">Skills</h1>
            <p className="skills-text">Below are my skills in corresponding programming languages and frameworks.</p>
            <Progressbar width="60%" lang="Python:" />
            <Progressbar width="95%" lang="HTML:" />
            <Progressbar width="85%" lang="CSS:" />
            <Progressbar width="90%" lang="JavaScript:" />
            <Progressbar width="70%" lang="Bootstrap:" />
            <Progressbar width="90%" lang="jQuery:" />
            <Progressbar width="90%" lang="NodeJS:" />
            <Progressbar width="85%" lang="ExpressJS:" />
            <Progressbar width="80%" lang="ReactJS:" />
            </div>
        </section>
    )
}

export default Skills;