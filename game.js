
const prompt = require('prompt-sync')()

class TicTacToe {

  constructor() {
    this.player = 'X';
    this.enemy = 'O'
    // the board as an array of arrays:
    this.board = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' ']
    ];
  }

  play(row, column) {


    // Draws where to put the X, makes sure its not already occupied
    let subArray = this.board[row]
    if (subArray[column] == ' ') {
      subArray.splice(column, 1, this.player)
    }
    else {
      console.log("that space is occupied")
      drawBoard()
      return this.board
    }


    // Enemy base move

    // enemy move
    let enemySuccessful = false
    let subArray0 = this.board[0]
    let subArray1 = this.board[1]
    let subArray2 = this.board[2]

    let enemyRow = getRandomInt(3)
    let enemyColumn = getRandomInt(3)


    // Makes the enemy smart
    // Rows:
    if ((subArray0[0] == this.player) && (subArray0[1] == this.player)
      && (subArray0[2] == ' ')) // row 0: X X ( )
    {
      enemyRow = 0
      enemyColumn = 2
      subArray = this.board[enemyRow]
      subArray.splice(enemyColumn, 1, this.enemy)
      enemySuccessful = true
    }

    if ((subArray0[0] == this.player) && (subArray0[2] == this.player)
      && (subArray0[1] == ' ')) // row 0: X ( ) X
    {
      enemyRow = 0
      enemyColumn = 1
      subArray = this.board[enemyRow]
      subArray.splice(enemyColumn, 1, this.enemy)
      enemySuccessful = true
    }

    if ((subArray0[1] == this.player) && (subArray0[2] == this.player)
      && (subArray0[0] == ' ')) // row 0: ( ) X X
    {
      enemyRow = 0
      enemyColumn = 0
      subArray = this.board[enemyRow]
      subArray.splice(enemyColumn, 1, this.enemy)
      enemySuccessful = true
    }

    if ((subArray1[0] == this.player) && (subArray1[1] == this.player)
      && (subArray1[2] == ' ')) // row 1: X X ( )
    {
      enemyRow = 0
      enemyColumn = 2
      subArray = this.board[enemyRow]
      subArray.splice(enemyColumn, 1, this.enemy)
      enemySuccessful = true
    }

    if ((subArray1[0] == this.player) && (subArray1[2] == this.player)
      && (subArray1[1] == ' ')) // row 1: X ( ) X
    {
      enemyRow = 1
      enemyColumn = 1
      subArray = this.board[enemyRow]
      subArray.splice(enemyColumn, 1, this.enemy)
      enemySuccessful = true
    }

    if ((subArray1[1] == this.player) && (subArray1[2] == this.player)
      && (subArray1[0] == ' ')) // row 1: ( ) X X
    {
      enemyRow = 1
      enemyColumn = 0
      subArray = this.board[enemyRow]
      subArray.splice(enemyColumn, 1, this.enemy)
      enemySuccessful = true
    }

    if ((subArray2[0] == this.player) && (subArray2[1] == this.player)
      && (subArray2[2] == ' ')) // row 2: X X ( )
    {
      enemyRow = 2
      enemyColumn = 2
      subArray = this.board[enemyRow]
      subArray.splice(enemyColumn, 1, this.enemy)
      enemySuccessful = true
    }

    if ((subArray2[0] == this.player) && (subArray2[2] == this.player)
      && (subArray2[1] == ' ')) // row 2: X ( ) X
    {
      enemyRow = 2
      enemyColumn = 1
      subArray = this.board[enemyRow]
      subArray.splice(enemyColumn, 1, this.enemy)
      enemySuccessful = true
    }

    if ((subArray2[1] == this.player) && (subArray2[2] == this.player)
      && (subArray2[0] == ' ')) // row 2: ( ) X X
    {
      enemyRow = 2
      enemyColumn = 0
      subArray = this.board[enemyRow]
      subArray.splice(enemyColumn, 1, this.enemy)
      enemySuccessful = true
    }
    // Columns:
    if ((subArray0[0] == this.player) && (subArray1[0] == this.player)
      && (subArray2[0] == ' ')) // COL 0: X / X / ( )
    {
      enemyRow = 2
      enemyColumn = 0
      subArray = this.board[enemyRow]
      subArray.splice(enemyColumn, 1, this.enemy)
      enemySuccessful = true
    }

    if ((subArray0[0] == this.player) && (subArray2[0] == this.player)
      && (subArray1[0] == ' ')) // COL 0: X / ( ) / X
    {
      enemyRow = 1
      enemyColumn = 0
      subArray = this.board[enemyRow]
      subArray.splice(enemyColumn, 1, this.enemy)
      enemySuccessful = true
    }
    if ((subArray1[0] == this.player) && (subArray2[0] == this.player)
      && (subArray0[0] == ' ')) // COL 0: ( ) / X / X
    {
      enemyRow = 0
      enemyColumn = 0
      subArray = this.board[enemyRow]
      subArray.splice(enemyColumn, 1, this.enemy)
      enemySuccessful = true
    }

    // Col 1
    if ((subArray0[1] == this.player) && (subArray1[1] == this.player)
      && (subArray2[1] == ' ')) // COL 1: X / X / ( )
    {
      enemyRow = 2
      enemyColumn = 1
      subArray = this.board[enemyRow]
      subArray.splice(enemyColumn, 1, this.enemy)
      enemySuccessful = true
    }

    if ((subArray0[1] == this.player) && (subArray2[1] == this.player)
      && (subArray1[1] == ' ')) // COL 1: X / ( ) / X
    {
      enemyRow = 1
      enemyColumn = 1
      subArray = this.board[enemyRow]
      subArray.splice(enemyColumn, 1, this.enemy)
      enemySuccessful = true
    }
    if ((subArray1[1] == this.player) && (subArray2[1] == this.player)
      && (subArray0[1] == ' ')) // COL 1: ( ) / X / X
    {
      enemyRow = 0
      enemyColumn = 1
      subArray = this.board[enemyRow]
      subArray.splice(enemyColumn, 1, this.enemy)
      enemySuccessful = true
    }

    // Col 2
    if ((subArray0[2] == this.player) && (subArray1[2] == this.player)
      && (subArray2[2] == ' ')) // COL 2: X / X / ( )
    {
      enemyRow = 2
      enemyColumn = 2
      subArray = this.board[enemyRow]
      subArray.splice(enemyColumn, 1, this.enemy)
      enemySuccessful = true
    }

    if ((subArray0[2] == this.player) && (subArray2[2] == this.player)
      && (subArray1[2] == ' ')) // COL 2: X / ( ) / X
    {
      enemyRow = 1
      enemyColumn = 2
      subArray = this.board[enemyRow]
      subArray.splice(enemyColumn, 1, this.enemy)
      enemySuccessful = true
    }
    if ((subArray1[2] == this.player) && (subArray2[2] == this.player)
      && (subArray0[2] == ' ')) // COL 2: ( ) / X / X
    {
      enemyRow = 0
      enemyColumn = 2
      subArray = this.board[enemyRow]
      subArray.splice(enemyColumn, 1, this.enemy)
      enemySuccessful = true
    }
    //Diagonal
    if ((subArray0[0] == this.player) && (subArray1[1] == this.player)
      && (subArray2[2] == ' ')) // Diagonal \ : X / X / ( )
    {
      enemyRow = 2
      enemyColumn = 2
      subArray = this.board[enemyRow]
      subArray.splice(enemyColumn, 1, this.enemy)
      enemySuccessful = true
    }
    if (((subArray0[0] == this.player) && (subArray2[2] == this.player)
      && (subArray1[1] == ' ')) ||
      ((subArray0[2] == this.player) && (subArray2[0] == this.player)
        && (subArray1[1] == ' '))) // Diagonal \ /: X / ( ) / X
    {
      enemyRow = 1
      enemyColumn = 1
      subArray = this.board[enemyRow]
      subArray.splice(enemyColumn, 1, this.enemy)
      enemySuccessful = true
    }

    if ((subArray1[1] == this.player) && (subArray2[2] == this.player)
      && (subArray0[0] == ' ')) // Diagonal \ : ( ) / X / X
    {
      enemyRow = 0
      enemyColumn = 0
      subArray = this.board[enemyRow]
      subArray.splice(enemyColumn, 1, this.enemy)
      enemySuccessful = true
    }

    if ((subArray0[2] == this.player) && (subArray1[1] == this.player)
      && (subArray2[0] == ' ')) // Diagonal / : X / X / ( )
    {
      enemyRow = 2
      enemyColumn = 0
      subArray = this.board[enemyRow]
      subArray.splice(enemyColumn, 1, this.enemy)
      enemySuccessful = true
    }

    if ((subArray1[1] == this.player) && (subArray0[2] == this.player)
      && (subArray2[0] == ' ')) // Diagonal / : ( ) / X / X
    {
      enemyRow = 2
      enemyColumn = 0
      subArray = this.board[enemyRow]
      subArray.splice(enemyColumn, 1, this.enemy)
      enemySuccessful = true
    }

    subArray = this.board[enemyRow]
    // Make sure enemy actually get their turn
    while (enemySuccessful == false) {
      if (subArray[enemyColumn] == ' ') {
        subArray.splice(enemyColumn, 1, this.enemy)
        enemySuccessful = true
      }
      enemyColumn = getRandomInt(3)
    }

    // See if anyone has won
    // Check if player has won:

    // Checks if any row is all X:
    if (((subArray0[0] == this.player) && (subArray0[1] == this.player) && (subArray0[2] == this.player)) ||
      ((subArray1[0] == this.player) && (subArray1[1] == this.player) && (subArray1[2] == this.player)) ||
      ((subArray2[0] == this.player) && (subArray2[1] == this.player) && (subArray2[2] == this.player))) {
      console.log("You won!")
    }
    // Checks if any column is all X:
    if (((subArray0[0] == this.player) && (subArray1[0] == this.player) && (subArray2[0] == this.player)) ||
      ((subArray0[1] == this.player) && (subArray1[1] == this.player) && (subArray2[1] == this.player)) ||
      ((subArray0[2] == this.player) && (subArray1[2] == this.player) && (subArray2[2] == this.player))) {
      console.log("You won!")
    }
    // Checks if any diagonal is all X:
    if (((subArray0[0] == this.player) && (subArray1[1] == this.player) && (subArray2[2] == this.player)) ||
      ((subArray0[2] == this.player) && (subArray1[1] == this.player) && (subArray2[0] == this.player))) {
      console.log("You won!")
    }

    // Checks if enemy has won:
    // Checks if any row is all O:
    if (((subArray0[0] == this.enemy) && (subArray0[1] == this.enemy) && (subArray0[2] == this.enemy)) ||
      ((subArray1[0] == this.enemy) && (subArray1[1] == this.enemy) && (subArray1[2] == this.enemy)) ||
      ((subArray2[0] == this.enemy) && (subArray2[1] == this.enemy) && (subArray2[2] == this.enemy))) {
      console.log("Enemy won!")
    }
    // Checks if any column is all O:
    if (((subArray0[0] == this.enemy) && (subArray1[0] == this.enemy) && (subArray2[0] == this.enemy)) ||
      ((subArray0[1] == this.enemy) && (subArray1[1] == this.enemy) && (subArray2[1] == this.enemy)) ||
      ((subArray0[2] == this.enemy) && (subArray1[2] == this.enemy) && (subArray2[2] == this.enemy))) {
      console.log("Enemy won!")
    }
    // Checks if any diagonal is all O:
    if (((subArray0[0] == this.enemy) && (subArray1[1] == this.enemy) && (subArray2[2] == this.enemy)) ||
      ((subArray0[2] == this.enemy) && (subArray1[1] == this.enemy) && (subArray2[0] == this.enemy))) {
      console.log("Enemy won!")
    }

    console.log("Keep playing")
    drawBoard()
    return this.board

    //    console.log(subArray)
  }

}

let game = new TicTacToe()
let row = prompt('What is your row?')
let column = prompt('What is your row?')
game.play(row, column)

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function drawBoard() {
  console.log(game.board[0])
  console.log(game.board[1])
  console.log(game.board[2])
}


