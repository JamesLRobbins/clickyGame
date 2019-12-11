import React from "react";
import "./style.css";

function Header(props) {
    return <div className="container-flex">
    <div className="row header">
        <div className="col-md-4">
            <h2 className="clickyGame">Clicky Game</h2>   
        </div>
        <div className="col-md-4">
            <h1 className="title">Click an image to begin!</h1>
        </div>
        <div className="col-md-4">
            <h2>Score: {props.score} | Top Score: {props.topScore}</h2>
        </div> 
    </div>
    </div>
}

export default Header;