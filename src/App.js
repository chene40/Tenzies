import React, { useState, useEffect } from "react"
import Die from "./Components/Die"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"
import updateStats from "./Stats/updateStats"
import Statistics from "./Components/Statistics"
import updateNumGamesPlayed from "./Stats/updateNumGamesPlayed"
import updateNumRestarts from "./Stats/updateNumRestarts"
import updateNumRolls from "./Stats/updateNumRolls"

export default function App(){

  // =========== STATES =========== //
  const [dieArray, setDieArray] = useState(allNewDice())    // dieArray state keeps track of current dies
  const [gameWon, setGameWon] = useState(false)
  const [ongoing, setOngoing] = useState(false)             // indicate if the user have started the game (game starts upon user clicking roll or holding a die)
  const [startTime, setStartTime] = useState()
  const [showStats, setShowStats] = useState(false)
  const [statsCleared, setStatsCleared] = useState(false)   // used to re-render stats page when button - "Clear Stats" is clicked - useEffect does this

  useEffect(() => {                                         // checks for winning condition - rerenders every time dieArray changes
    const winningValue = dieArray[0].value
    const allHeld = dieArray.every(die => die.isHeld)                           // is everyDie held?
    const allSameValue = dieArray.every(die => die.value === winningValue)      // does every die have the same number?

    if (allHeld && allSameValue) {                // winning conditions
      setGameWon(true)
      endTimer()
    }
  }, [dieArray, statsCleared])

  // =========== DICE FUNCTIONS =========== //
  function generateNewDie(){            // generates a new die object (random number between 1-6): pseudo-random number
    return(
      {value: Math.floor(Math.random()*6 + 1), isHeld: false, id: nanoid()}
    )
  }

  function allNewDice(){                // creates 10 new dies (executes on first render and upon winning new game)
    let newDieArray = []
    for (let i = 0; i < 10; i++){
      newDieArray.push(generateNewDie())
    }
    return newDieArray
  }

  function generateNewNumbers(){        // If die is not held, generate a new die/number
    startTimer()
    updateNumRolls()
    
    setDieArray(prevDices => prevDices.map(                     // if die is not held, generate a new die
      die => die.isHeld ? die : generateNewDie()
    ))
  }

  function holdDice(id){                // changes whether a die is being held or not
    startTimer()

    // if game is won, user should not be able to deselect die otherwise stats will be incorrect
    !gameWon && setDieArray(prevArray => prevArray.map(
      die => die.id !== id ? die : {...die, isHeld: !die.isHeld}
    ))
  }

  // =========== END GAME FUNCTIONS =========== //
  function newGame(){                      // to be executed when a game is won
    setDieArray(allNewDice())
    setGameWon(false)
    updateNumGamesPlayed()
  }

  function restartGame(){                 // to be executed when a game is restarted
    newGame()
    setOngoing(false)
    updateNumRestarts()
  }

  function startTimer(){
    if (!ongoing){
      setStartTime(new Date().getTime())
      setOngoing(true)
    }
  }

  function endTimer(){
    if (ongoing){                                 // useEffect will rerender page when statsCleared is set to false (do not want to re-execute updateStats)
      let endTime = new Date().getTime()
      setOngoing(false)
      var timeElapsed = endTime - startTime
      updateStats(timeElapsed)
    }
    setStatsCleared(false)
  }

  // =========== TOGGLING BETWEEN STATIC PAGES =========== //
  function clearStats(){
    setStatsCleared(true)
    newGame()
    localStorage.clear()
  }

  function toggleStats(){                      // toggle between game page and stats page
    setShowStats(prevState => !prevState)
  }

  // =========== CREATE DIE COMPONENTS =========== //
  const dices = dieArray.map(die => <Die key={die.id} number={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)}/>)

  // =========== MAIN =========== //
  return(
    showStats ? <Statistics playGame={toggleStats} clearStats={clearStats} /> : 
    <main>
    {gameWon && <Confetti />}
      <h1 className="title-game">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="grid-container">
        {dices}
      </div>
      <div className="buttons">
        <button 
          onClick={gameWon ? newGame : generateNewNumbers} 
          className="button">
            {gameWon ? "New Game" : "Roll"}
        </button>
        <button className="button red" onClick={restartGame}>Restart</button>
        <button className="button green" onClick={toggleStats}>Stats</button>
      </div>
    </main>
  )
}