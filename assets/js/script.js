/**
 *
 * Need a toggle that tells you that you have started the game.
 * Need a toggle that tells you whose turn it is.
 * Stores current game state with empty strings as this makes it easier to track the game.
 */

let startedGame = false;

let playersTurn = "X"; 

let gameSetup = ["", "", "", "", "", "", "", "", ""];

/**
 * Adds the X or O to cell
 */

function onCellClick(event) {
  event.target.innerHTML = playersTurn;

  const cellIndex = event.target.getAttribute("data-cell-index");

/**
 * Player change from X to O on next click
 */
  if (playersTurn === "X") {
    playersTurn = "O";
    gameSetup[cellIndex] = "X";
  } else {
    playersTurn = "X";
    gameSetup[cellIndex] = "O";
  }

  /**
   * Checks game result to see if win is true and game will reset, if false will keep playing and check for draw
   */
  const win = checkForWin(); 
  if (win) {
    resetGame();
  } else {
    checkForDraw();
  }
}

/** Event listener added to reset button to restart game instead of refreshing page */
document.querySelectorAll("button")[0].addEventListener("click", resetGame);

/**
 * Returns array and listens for clicks, adds player symbol in to cell when clicked
 */
const listOfCells = document.querySelectorAll(".cell"); 
for (let i = 0; i < listOfCells.length; i++) {
  listOfCells[i].addEventListener("click", onCellClick);
}

/**
 * Reset game without refreshing page and returns array then sets each nodes innner html to null or empty string.
 */
function resetGame() {
  playersTurn = "X";
  gameSetup = ["", "", "", "", "", "", "", "", ""];
  const listOfCells = document.querySelectorAll(".cell");
  for (let i = 0; i < listOfCells.length; i++) {
    listOfCells[i].innerHTML = "";
  }
}

/**
 * Cell combinations that will result in a win
 */
const winningTableScores = [
  [0, 1, 2], 
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

/**
 * Checks if there are any values in the game setup array that are not populated with a symbol to check for a draw, creates the draw alert and resets game
 */
function checkForDraw() {
  let gameDraw = !gameSetup.includes("");
  if (gameDraw) {
    alert("This game is a draw! Everybody is a winner :D");
    resetGame();
  }
}

/**
 * Checks for a win by going through the winning scores array to check if the combination matches and produces game win alert if not will log as a draw
 */

function checkForWin() {
  const allCellsAreFilled = checkForDraw();
  const listOfCells = document.querySelectorAll(".cell");

  for (let i = 0; i < winningTableScores.length; i++) {
    const winningMove = winningTableScores[i]; // [0, 1, 2]

    const cell1 = winningMove[0];
    const cell2 = winningMove[1];
    const cell3 = winningMove[2];

    const a = listOfCells[cell1].innerHTML;
    const b = listOfCells[cell2].innerHTML;
    const c = listOfCells[cell3].innerHTML;

    const allRowsAreFilled = a && b && c;
    const isWinningMove = a == b && b == c && a == c;

    if (allRowsAreFilled && isWinningMove) {
      alert("Player " + a + " has won!");
      return true;
    }
  }
}
