import { DungeonSquare, Map, SquareCoord } from '../view/MapComponent/interfaceMap';

function numberOfSquares(dungeonSquares: DungeonSquare[], XorY: string): number {
  const axis = XorY as keyof SquareCoord;
  const dungeonSquaresAxis = dungeonSquares.map((square) => square[axis]);
  return Math.max(...dungeonSquaresAxis) + 1;
}

function numberOfRows(dungeonSquares: DungeonSquare[], X: string): number {
  return numberOfSquares(dungeonSquares, X);
}

function numberOfColumns(dungeonSquares: DungeonSquare[], Y: string): number {
  return numberOfSquares(dungeonSquares, Y);
}

function buildMap(dungeonSquares: DungeonSquare[]): Map {
  return dungeonSquares.reduce((map, square) => {
    const x = square['X'];
    const y = square['Y'];
    const squareRow = map[y] || [];
    squareRow[x] = square;
    map[y] = squareRow;
    return map;
  }, [] as Map);
}

export default {
  buildMap,
  numberOfRows,
  numberOfColumns
};
