import updateTotalTime from "./updateTotalTime"
import updateNumWins from "./updateNumWins"
import updateAvgTimePerWin from "./updateAvgTimePerWin"
import updateAvgRollsPerWin from "./updateAvgRollsPerWin"
import updateBestTime from "./updateBestTime"
 
export default function updateStats(time){
    updateTotalTime(time)
    updateNumWins()
    updateAvgTimePerWin()
    updateAvgRollsPerWin()
    updateBestTime(time)
}