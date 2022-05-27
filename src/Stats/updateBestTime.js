export default function updateBestTime(time){
  let newTime = Math.floor((time/1000) * 100)/100
  if (!localStorage.getItem("best-time") || newTime < localStorage.getItem("best-time")){
    localStorage.setItem("best-time", newTime)
  }
}