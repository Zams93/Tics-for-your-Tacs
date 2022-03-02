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