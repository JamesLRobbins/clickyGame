import React from "react";
import "./style.css";

function Images(props) {
    return (
        <div className="card">
            <div className="img-container">
            <img alt={props.name} src={props.image} id={props.id} onClick={() => props.handleClick(props.id)}/>
            </div>
        </div>
    )
};

export default Images;

