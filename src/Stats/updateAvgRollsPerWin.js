export default function updateAvgRollsPerWin(){
    let avgRollsPerWin = Math.floor(Number(localStorage.getItem("total-num-rolls"))/Number(localStorage.getItem("num-wins")) * 100)/100
    localStorage.setItem("average-rolls-per-win", avgRollsPerWin)
}