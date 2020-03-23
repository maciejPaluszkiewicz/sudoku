const validate = (puzzle, x, y, value) => {

  const validateRow = () => {
    for (let i = 0; i < 9; i++) {
      if (puzzle[x][i] === value) return false;
    }
    return true;
  }
  const validateColumn = () => {
    for (let i = 0; i < 9; i++) {
      if (puzzle[i][y] === value) return false;
    }
    return true;
  }

  const validateSquare = () => {
    let squareX = Math.floor(x / 3) * 3;
    let squareY = Math.floor(y / 3) * 3;

    for (let i = squareX; i < squareX + 3; i++) {
      for (let j = squareY; j < squareY + 3; j++) {
        if (value === puzzle[i][j]) return false;
      }
    }
    return true;
  }
  return validateRow() && validateColumn() && validateSquare();
}

const solve = (puzzle, x, y) => {
  if (x === 9) {
    x = 0;
    y = y + 1;
    if (y === 9) return true;
  }

  if (puzzle[x][y] > 0) return solve(puzzle, x + 1, y);

  for (let value = 1; value <= 9; value++) {
    if (validate(puzzle, x, y, value)) {
      puzzle[x][y] = value;
      if (solve(puzzle, x + 1, y)) return true;
    }
  }
  puzzle[x][y] = 0;
  return false;
}

// const sudoku = (puzzle) => solve(puzzle, 0, 0) ? puzzle : null;

module.exports = function solveSudoku(puzzle) {
  return solve(puzzle, 0, 0) ? puzzle : null;
}