export default function updateNumRolls(){
    if (!localStorage.getItem("total-num-rolls")) localStorage.setItem("total-num-rolls", 1)                // initialize num-rolls stats if it is not already
    else {localStorage.setItem("total-num-rolls", Number(localStorage.getItem("total-num-rolls")) + 1)}     // update num-rolls stats

}