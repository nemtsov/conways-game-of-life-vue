export function createNewGrid(sizeX, sizeY) {
  const grid = [];
  for (let i = 0; i < sizeY; i++) {
    const row = [];
    for (let j = 0; j < sizeX; j++) row.push(false);
    grid.push(row);
  }
  return grid;
}

export function getNextGrid(grid, sizeX, sizeY) {
  const nextGrid = cloneGrid(grid);

  for (let i = 0; i < sizeY; i++) {
    for (let j = 0; j < sizeX; j++) {
      const isLiving = grid[i][j];
      const numLiving = getLivingNeighbors(grid, sizeX, sizeY, i, j);

      let result = false;
      if (isLiving && numLiving < 2) {
        result = false;
      }
      if (isLiving && (numLiving === 2 || numLiving == 3)) {
        result = true;
      }
      if (isLiving && numLiving > 3) {
        result = false;
      }
      if (!isLiving && numLiving === 3) {
        result = true;
      }

      nextGrid[i][j] = result;
    }
  }

  return nextGrid;
}

function cloneGrid(grid) {
  const newGrid = [];
  for (let i = 0; i < grid.length; i++) {
    newGrid[i] = [];
    for (let j = 0; j < grid[i].length; j++) {
      newGrid[i][j] = grid[i][j];
    }
  }
  return newGrid;
}

function getLivingNeighbors(grid, sizeX, sizeY, i, j) {
  let count = 0;

  // 0 0 0
  // 0   0
  // 0 * 0
  if (i != sizeY - 1) if (grid[i + 1][j]) count++;

  // 0 0 0
  // 0   0
  // 0 0 *
  if (i != sizeY - 1 && j != sizeX - 1) if (grid[i + 1][j + 1]) count++;

  // 0 0 0
  // 0   *
  // 0 0 0
  if (j != sizeY - 1) if (grid[i][j + 1]) count++;

  // 0 0 *
  // 0   0
  // 0 0 0
  if (i != 0 && j != sizeX - 1) if (grid[i - 1][j + 1]) count++;

  // 0 * 0
  // 0   0
  // 0 0 0
  if (i != 0) if (grid[i - 1][j]) count++;

  // * 0 0
  // 0   0
  // 0 0 0
  if (i != 0 && j != 0) if (grid[i - 1][j - 1]) count++;

  // 0 0 0
  // *   0
  // 0 0 0
  if (j != 0) if (grid[i][j - 1]) count++;

  // 0 0 0
  // 0   0
  // * 0 0
  if (i != sizeY - 1 && j != 0) if (grid[i + 1][j - 1]) count++;

  return count;
}
