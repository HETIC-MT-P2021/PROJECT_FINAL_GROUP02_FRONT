import { DungeonSquare, Map } from '../view/MapComponent/interfaceMap';

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

export default { buildMap };
