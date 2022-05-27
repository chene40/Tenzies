import React from "react"

export default function SingleStat(props){
    return(
        <div className="stats">
            <p className="stats-name">{props.name}</p>
            <p className="stats-value">{props.value}</p>
        </div>
    )
}
