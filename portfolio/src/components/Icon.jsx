import React from "react";

function Icon(props){
    return (
        <li className="icon-item"><i className={props.class}>{props.text}</i></li>
    )
}

export default Icon;