import React from 'react';
import Infos from '../Infos';
import Stats from '../Stats';
import MapSquare from '../MapSquare';
import { DungeonSquare, SquareCoord, Map } from './interfaceMap';
import dungeonSquares from '../../services/data/DungeonSquares';

export interface Props {}

export const MapComponent: React.FunctionComponent<Props> = () => {
  function buildMap(dungeonSquares: DungeonSquare[]): Map {
    return dungeonSquares.reduce((map, square) => {
      const x = square['x'];
      map[x] = [...(map[x] || []), square];
      return map;
    }, [] as Map);
  }
  const dungeonMapGroup = buildMap(dungeonSquares);

  // Return number of rows and columns of the map
  function numberOfSquares(dungeonSquares: DungeonSquare[], squareCoord: string): number {
    const axis = squareCoord as keyof SquareCoord;
    const dungeonSquaresAxis = dungeonSquares.map((square) => square[axis]);
    return Math.max(...dungeonSquaresAxis) + 1;
  }

  const map = [];
  for (let x = 0; x < numberOfSquares(dungeonSquares, 'x'); x++) {
    const lane = [];
    for (let y = 0; y < numberOfSquares(dungeonSquares, 'y'); y++) {
      lane.push(<MapSquare key={x + '' + y} squareX={x} squareY={y} dungeonMapGroup={dungeonMapGroup}></MapSquare>);
    }
    map.push(<tr key={x}>{lane}</tr>);
  }

  return (
    <div>
      <div id="map-title" className="text-center">
        DUNGEON MAP
      </div>
      <div className="text-center" style={{ display: 'flex', justifyContent: 'center', marginTop: 5 }}>
        <div className="full-map">
          {/* Infos */}
          <Infos />
          {/* Map squares */}
          <table>
            <tbody>{map}</tbody>
          </table>
          {/* Stats */}
          <Stats />
        </div>
      </div>
    </div>
  );
};
