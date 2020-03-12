import React from "react";
import Result from "./Result";

function Order(props){
    return(
        <div className="dropdown">
        <p>Order:</p>
        <div className="dropdown-content" id="myDropdown">
            <button className="name" onClick={props.ordername}>name</button>
            <button className="year" onClick={props.orderyear}>year</button>
        </div>
    </div>
    )
}

export default Order
