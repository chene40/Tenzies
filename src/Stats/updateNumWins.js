export default function updateNumWins(){
    if (!localStorage.getItem("num-wins")) localStorage.setItem("num-wins", 1)
    else{localStorage.setItem("num-wins", Number(localStorage.getItem("num-wins")) + 1)}
}