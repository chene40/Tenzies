export default function updateNumGamesPlayed(){
    if (!localStorage.getItem("num-games-played")) localStorage.setItem("num-games-played", 1)
    else {localStorage.setItem("num-games-played", Number(localStorage.getItem("num-games-played")) + 1)}
}