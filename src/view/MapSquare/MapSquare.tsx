import React from 'react';
import { Map } from '../../view/MapComponent/interfaceMap';

export interface Props {
  squareX: number;
  squareY: number;
  dungeonMapGroup: Map;
}

export const MapSquare: React.FunctionComponent<Props> = ({ squareX, squareY, dungeonMapGroup }) => {
  function getSquareClasses(x: number, y: number) {
    let classes = 'square ';
    // classes += dungeonMapGroup[x][y] && dungeonMapGroup[x][y].player ? 'player-pos ' : '';
    classes += dungeonMapGroup[x][y] && dungeonMapGroup[x][y].isExit ? 'exit-square ' : '';
    classes += dungeonMapGroup[x][y] && dungeonMapGroup[x][y].impassable ? 'inacessible-square ' : '';
    return classes;
  }

  return <td className={getSquareClasses(squareX, squareY)}></td>;
};
