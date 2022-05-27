export default function updateTotalTime(time){
    let timeToAdd = Math.floor(time/1000 * 100)/100
    if (!localStorage.getItem("total-time-played"))localStorage.setItem("total-time-played", timeToAdd)
    else {localStorage.setItem("total-time-played", Number(localStorage.getItem("total-time-played")) + timeToAdd)}
}