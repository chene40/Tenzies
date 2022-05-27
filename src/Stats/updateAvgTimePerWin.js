export default function updateAvgTimePerWin(){
    let avgTimePerWin = Math.floor(Number(localStorage.getItem("total-time-played"))/Number(localStorage.getItem("num-wins")) * 100)/100
    localStorage.setItem("average-time-per-win", avgTimePerWin)
}