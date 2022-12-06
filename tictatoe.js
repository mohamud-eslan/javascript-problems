function TicTacToe(board) {

    // check top row
        
    let god1 = board[0][0]
    let god2 = board[0][1]
    let god3 = board[0][2]
    if (god1 === god2 && god2 === god3) {
      return god1
    }

    // check middle row
        
    let god4 = board[1][0]
    let god5 = board[1][1]
    let god6 = board[1][2]
    if (god4 === god5 && god5 === god6) {
      return god4
    }

    // check bottom row
    let god7 = board[2][0]
    let god8 = board[2][1]
    let god9 = board[2][2]
    if (god7 === god8 && god8 === god9) {
      return god8 
    }

    // vertial left
    let ver1 = board[0][0]
    let ver2 = board[1][0]
    let ver3 = board[2][0]
    if (ver1 === ver2 && ver2 === ver3) {
      return ver2
    }

    // vertical middle
     ver1 = board[0][1]
     ver2 = board[1][1]
     ver3 = board[2][1]
     if (ver1 === ver2 && ver2 === ver3) {
      return ver2
    }

    // vertial rgith
    ver1 = board[0][2]
    ver2 = board[1][2]
    ver3 = board[2][2]
   if (ver1 === ver2 && ver2 === ver3) {
     return ver2
   }

    // first diagonal 
    ver1 = board[0][0]
    ver2 = board[1][1]
    ver3 = board[2][2]
   if (ver1 === ver2 && ver2 === ver3) {
     return ver2
   }


    // second diagonol

    ver1 = board[0][2]
    ver2 = board[1][1]
    ver3 = board[2][0]
   if (ver1 === ver2 && ver2 === ver3) {
     return ver1
   }

    return "Draw"
  }
   console.log(TicTacToe(
      [  
    ["O", "u", "O"],
    ["O", "X", "O"],
    ["X", "O", "X"]
      ]
     ));
  console.log(TicTacToe([
    ["E", "O", "O"],
    ["O", "X", "X"],
    ["X", "X", "X"]
  ]));
  console.log(TicTacToe([
    ["X", "X", "O"],
    ["O", "O", "O"],
    ["X", "X", "O"]
  ]));