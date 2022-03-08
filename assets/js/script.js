/**
 * 
 * Need a toggle that tells you that you have started the game.
 * Need a toggle that tells you whose turn it is.
 * Need to listen for clicks.
 * When someone clicks need to put in the box they have clicked in a X or O depending on whose turn it is.
 * After move finished switch player.
 */

let startedGame = false

let playersTurn = "X"
if (playersTurn === "X"){
  document.getElementsByClassName("cell").innerHTML = "X";
  playersTurn = 0;
} else {
  document.getElementsByClassName("cell").innerHTML = "O";
  playersTurn = 1;
}


let gameSetup = ["", "", "", "", "", "", "", "", "",];

// document.querySelector("p");.addEventListener("click", displayDate);

// querySelectorAll();.addEventListener("click", displayDate);

function onCellClick(event) { 
    console.log("Cell is Clicked")
    console.log(event.target)
    event.target.innerHTML = playersTurn
}

const listOfCells= document.querySelectorAll(".cell")
for (let i = 0; i < listOfCells.length; i++) {
    listOfCells[i].addEventListener("click", onCellClick)
  }

console.log(document.querySelectorAll(".cell"))

const winningTableScores = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]; 
function gameResult() {
  let winningRound = false;
  for (let i = 0; i <= 7; i++) {
    const winningTableScores = winningTableScores[i]
    let a = gameSetup[winningTableScores[0]];
    let b = gameSetup[winningTableScores[1]];
    let c = gameSetup[winningTableScores[2]];
    if (a === "" || b === "" || c === "") {
      continue; 
    }
    if (a === b && b === c) {
      winningRound = true;
      break

    }
  }

}