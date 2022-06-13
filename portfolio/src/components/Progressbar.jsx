import React from "react";

function Progressbar(props) {
    return (
        <div className="progress-container">
            <h1 className="langs">{props.lang} {props.width}</h1>
            <div className="progress">
                <div className="progress-bar" style={{width: props.width}}></div>
            </div>
        </div>
    )
}

export default Progressbar;