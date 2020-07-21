/* This function checks if a sudoku board is 
solved correctly or not. An array of with 9 arrays should be passed
in as a parameter.
*/
function validSolution(board) {
  for (let line of board) {
    let row = [];
    for (let num of line) {
      if (!row.includes(num)) row.push(num);
      else return false;
    }
  }
  for (let i = 0; i < 9; i++) {
    let col = [];
    for (let j = 0; j < 9; j++) {
      if (!col.includes(board[j][i])) col.push(board[j][i]);
      else return false;
    }
  }
  function checkSquare(m, limit1, n, limit2) {
    let square = [];
    for (let theRow = m; theRow < limit1; theRow++) {
      for (let theCol = n; theCol < limit2; theCol++) {
        if (!square.includes(board[theRow][theCol]))
          square.push(board[theRow][theCol]);
        else return false;
      }
    }
    return true;
  }
  let square1 = checkSquare(0, 3, 0, 3);
  let square2 = checkSquare(0, 3, 3, 6);
  let square3 = checkSquare(0, 3, 6, 9);
  let square4 = checkSquare(3, 6, 0, 3);
  let square5 = checkSquare(3, 6, 3, 6);
  let square6 = checkSquare(3, 6, 6, 9);
  let square7 = checkSquare(6, 9, 0, 3);
  let square8 = checkSquare(6, 9, 3, 6);
  let square9 = checkSquare(6, 9, 6, 9);
  if (
    !(
      square1 &&
      square2 &&
      square3 &&
      square4 &&
      square5 &&
      square6 &&
      square7 &&
      square8 &&
      square9
    )
  )
    return false;
  return true;
}
