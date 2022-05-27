export default function updateNumRestarts(){
    if (!localStorage.getItem("num-restarts")) localStorage.setItem("num-restarts", 1)
    else {localStorage.setItem("num-restarts", Number(localStorage.getItem("num-restarts")) + 1)}
}