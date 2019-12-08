import React from "react";
import "./style.css";

function Header() {
    return <div className="container-flex">
    <div className="row header">
        <div className="col-md-4">
            <h2>Clicky Game</h2>   
        </div>
        <div className="col-md-4">
            <h1 className="title">Click an image to begin!</h1>
        </div>
        <div className="col-md-4">
            <h2>Score: 0 | Top Score: 0</h2>
        </div> 
    </div>
    </div>
}

export default Header;