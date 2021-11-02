import React from 'react';
import { DungeonSquare } from '../../view/MapComponent/interfaceMap';
// import MapSquareLegend from '../MapSquareLegend';

export interface Props {
  square: DungeonSquare;
}

export const MapSquare: React.FunctionComponent<Props> = ({ square }) => {
  function getSquareClasses() {
    let classes = 'square ';
    classes += square.Characters ? 'player-pos ' : '';
    classes += square.IsExit ? 'exit-square ' : '';
    classes += square.IsImpassable ? 'impassable-square ' : '';
    return classes;
  }

  return (
    <td className={getSquareClasses()}>
      {!square.Characters && !square.IsExit && !square.IsImpassable && !square.IsDiscovered ? (
        <span style={{ fontSize: 25 }}>?</span>
      ) : (
        <span></span>
      )}
      {/* <MapSquareLegend /> */}
    </td>
  );
};
