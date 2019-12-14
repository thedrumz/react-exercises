let side;

const setSide = value => side = value;
export const getSide = () => side;

// Helpers
export const getRow = index => parseInt(index / side);
export const getColumn = index => parseInt(index % side);
export const isInRow = (index, row) => {
  return getRow(index) === row;
}
export const isInColumn = (index, column) => {
  return getColumn(index) === column;
}
export const initOrSum = value => value === undefined ? 1 : value +1;

// Getters
export const getTop = index => {
  const top = index - side;
  return isInColumn(top, getColumn(index)) && isInRow(top, getRow(index) -1) ? top : false;
}
export const getTopRight = index => {
  const topRight = index - side +1;
  return isInRow(topRight, getRow(index) -1) && isInColumn(topRight, getColumn(index) +1) ? topRight : false;
}
export const getRight = index => {
  const right = index +1;
  return isInRow(right, getRow(index)) && isInColumn(right, getColumn(index) +1) ? right : false;
}
export const getBottomRight = index => {
  const bottomRight = index + side +1;
  return isInRow(bottomRight, getRow(index) +1) && isInColumn(bottomRight, getColumn(index) +1) ? bottomRight : false;
}
export const getBottom = index => {
  const bottom = index + side;
  return isInColumn(bottom, getColumn(index)) ? bottom : false;
}
export const getBottomLeft = index => {
  const bottomLeft = index + side -1;
  return isInRow(bottomLeft, getRow(index) +1) && isInColumn(bottomLeft, getColumn(index) -1) ? bottomLeft : false;
}
export const getLeft = index => {
  const left = index -1;
  return isInRow(left, getRow(index)) && isInColumn(left, getColumn(index) -1) ? left : false;
}
export const getTopLeft = index => {
  const topLeft = index - side -1;
  return isInRow(topLeft, getRow(index) -1) && isInColumn(topLeft, getColumn(index) -1) ? topLeft : false;
}

const setBombs = (square, bombs) => {
  const result = [];
  setSide(Math.sqrt(square));

  while(bombs) {
    const index = Math.floor(Math.random() * square);

    if(result[index] === true) continue;

    result[index] = true;
    
    if(getTop(index) !== false && result[getTop(index)] !== true) {
      result[getTop(index)] = initOrSum(result[getTop(index)]);
    }
    if(getTopRight(index) !== false && result[getTopRight(index)] !== true) {
      result[getTopRight(index)] = initOrSum(result[getTopRight(index)]);
    }
    if(getRight(index) !== false && result[getRight(index)] !== true) {
      result[getRight(index)] = initOrSum(result[getRight(index)]);
    }
    if(getBottomRight(index) !== false && result[getBottomRight(index)] !== true) {
      result[getBottomRight(index)] = initOrSum(result[getBottomRight(index)]);
    }
    if(getBottom(index) !== false && result[getBottom(index)] !== true) {
      result[getBottom(index)] = initOrSum(result[getBottom(index)]);
    }
    if(getBottomLeft(index) !== false && result[getBottomLeft(index)] !== true) {
      result[getBottomLeft(index)] = initOrSum(result[getBottomLeft(index)]);
    }
    if(getLeft(index) !== false && result[index -1] !== true) {
      result[getLeft(index)] = initOrSum(result[getLeft(index)]);
    }
    if(getTopLeft(index) !== false && result[getTopLeft(index)] !== true) {
      result[getTopLeft(index)] = initOrSum(result[getTopLeft(index)]);
    }

    bombs--;
  }

  return result;
}

export default setBombs;