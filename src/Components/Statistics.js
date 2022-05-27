import React from "react"
import SingleStat from "./SingleStat"

export default function Statistics(props){
    return(
        <main>
            <h1 className="title-stats">Here are your statistics!</h1>
            <p className="stats-info">Times are recorded in seconds and will start as soon as you hold your first die or upon clicking roll again.
            Number of games played recorded upon finishing or restarting a game.</p>
            <div className="stats-box">
                <SingleStat name="Best Time" value={localStorage.getItem("best-time")}/>
                <SingleStat name="Total Time Played" value={localStorage.getItem("total-time-played")}/>
                <SingleStat name="# Games Played" value={localStorage.getItem("num-games-played")}/>
                <SingleStat name="# of Restarts" value={localStorage.getItem("num-restarts")}/>
                <SingleStat name="Total # Wins" value={localStorage.getItem("num-wins")}/>
                <SingleStat name="Total # Rolls" value={localStorage.getItem("total-num-rolls")}/>
                <SingleStat name="Average Rolls Per Win" value={localStorage.getItem("average-rolls-per-win")}/>
                <SingleStat name="Average Time Per Win" value={localStorage.getItem("average-time-per-win")}/>
            </div>
            <div className="stats-buttons">
                <button className="button" onClick={props.playGame}>Tenzies</button>
                <button className="button red" onClick={props.clearStats}>Clear</button>
            </div>
        </main>
    )
}