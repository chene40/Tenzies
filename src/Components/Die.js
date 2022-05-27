import React from "react"

export default function Die(props){
    return(
        <div className={`die-box ${props.isHeld ? "held" : ""}`} onClick={props.holdDice}>
            <p styles="die-number">{props.number}</p>
        </div>
    )
}