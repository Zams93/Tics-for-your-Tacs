/**
 *
 * Need a toggle that tells you that you have started the game.
 * Need a toggle that tells you whose turn it is.
 * Need to listen for clicks.
 * When someone clicks need to put in the box they have clicked in a X or O depending on whose turn it is.
 * After move finished switch player.
 */

// on click we change the cell to the players tic
// change players tic

let startedGame = false;

let playersTurn = "X"; // tracker players turn tracker // X O X O X O X O X O

let gameSetup = ["", "", "", "", "", "", "", "", ""];

// document.querySelector("p");.addEventListener("click", displayDate);

// querySelectorAll();.addEventListener("click", displayDate);

// click 1 = onCellCLick = X
// click 2 = onClickClick = 0
// click 3 = onCellCLick = X

function onCellClick(event) {
  // adding the tic or toe to cell
  event.target.innerHTML = playersTurn;

  // ============
  // change players
  if (playersTurn === "X") {
    playersTurn = "O";
  } else {
    playersTurn = "X";
  }
  // ============
  // check game result

  const hasGameFinished = checkForWin(); // return true  game is finished there is a winner /// return false game is not finihed and keep playing

  if (hasGameFinished) {
    alert(" Player Has Won");
  }

  // ============
}

const listOfCells = document.querySelectorAll(".cell"); // returns array set each ndoes innner html to null or empty string
for (let i = 0; i < listOfCells.length; i++) {
  listOfCells[i].addEventListener("click", onCellClick);
}

function resetGame() {
  // reset game with out refreshing page.
  const listOfCells = document.querySelectorAll(".cell");
}
// returns array set each ndoes innner html to null or empty string
// nedd to loop

const winningTableScores = [
  [0, 1, 2], //index 0
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkForWin() {
  const listOfCells = document.querySelectorAll(".cell");

  for (let i = 0; i < winningTableScores.length; i++) {
    const winningMove = winningTableScores[i]; // [0, 1, 2]

    const cell1 = winningMove[0];
    const cell2 = winningMove[1];
    const cell3 = winningMove[2];

    const a = listOfCells[cell1].innerHTML;
    const b = listOfCells[cell2].innerHTML;
    const c = listOfCells[cell3].innerHTML;

    const allCellsAreFilled = a && b && c;
    const isWinningMove = a == b && b == c && a == c;

    if (allCellsAreFilled && isWinningMove) {
      alert("there is a win" + "Player " + a + " Has Won");
      resetGame();
    }
  }
}