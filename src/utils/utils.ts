import { DungeonSquare, Map } from '../view/MapComponent/interfaceMap';

function buildMap(dungeonSquares: DungeonSquare[]): Map {
  return dungeonSquares.reduce((map, square) => {
    const x = square['X'];
    map[x] = [...(map[x] || []), square];
    return map;
  }, [] as Map);
}

export default { buildMap };
