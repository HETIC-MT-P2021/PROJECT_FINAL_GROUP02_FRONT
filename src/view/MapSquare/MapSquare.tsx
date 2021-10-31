import React from 'react';
import MapSquareLegend from '../MapSquareLegend';
import { Map } from '../../view/MapComponent/interfaceMap';

export interface Props {
  squareX: number;
  squareY: number;
  mapSquares: Map;
}

export const MapSquare: React.FunctionComponent<Props> = ({ squareX, squareY, mapSquares }) => {
  function getSquareClasses(x: number, y: number) {
    let classes = 'square ';
    classes += mapSquares && mapSquares[x][y] && mapSquares[x][y].Characters ? 'player-pos ' : '';
    classes += mapSquares && mapSquares[x][y] && mapSquares[x][y].IsExit ? 'exit-square ' : '';
    classes += mapSquares && mapSquares[x][y] && mapSquares[x][y].Impassable ? 'inacessible-square ' : '';
    // classes += mapSquares && mapSquares[x][y] && ! mapSquares[x][y].isDiscorvered
    // && ! mapSquares[x][y].Characters && ! mapSquares[x][y].IsExit && ! mapSquares[x][y].Impassable ? 'undiscovered-square ' : '';
    return classes;
  }

  return (
    <td className={getSquareClasses(squareX, squareY)}>
      <MapSquareLegend />
    </td>
  );
};
