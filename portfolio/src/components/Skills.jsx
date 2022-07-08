import React from "react";
import Icon from "./Icon";

function Skills() {
    return (
        <section id="skills" className="skills">
            <div className="skills-section">
                <h1 className="skills-heading">Skills</h1>
                <br />
                <p className="skills-text">Languages</p>
                <ul className="tech-icons">
                    <Icon class="devicon-python-plain-wordmark" />
                    <Icon class="devicon-html5-plain-wordmark" />
                    <Icon class="devicon-css3-plain-wordmark" />
                    <Icon class="devicon-javascript-plain" />
                    <Icon class="devicon-typescript-plain" />
                </ul>
                <p className="skills-text">Frameworks & Dbs</p>
                <ul className="tech-icons">
                    <Icon class="devicon-express-original-wordmark" />
                    <Icon class="fa-brands fa-react" />
                    <Icon class="devicon-svelte-plain-wordmark" />
                    <Icon class="devicon-nextjs-original-wordmark" />
                    <Icon class="devicon-mongodb-plain-wordmark" />
                    <Icon class="devicon-sqlite-plain-wordmark" />
                </ul>
                <ul className="tech-icons">
                    <Icon class="devicon-jquery-plain-wordmark" />
                    <Icon class="devicon-tailwindcss-original-wordmark" />
                    <Icon class="fa-brands fa-bootstrap" />
                    <Icon class="devicon-bulma-plain" />
                </ul>
                <p className="skills-text">Tools & Technologies</p>
                <ul className="tech-icons">
                    <Icon class="devicon-nodejs-plain-wordmark" />
                    <Icon class="devicon-git-plain-wordmark" />
                    <Icon class="devicon-vscode-plain" />
                </ul>
            </div>
        </section>
    )
}

export default Skills;