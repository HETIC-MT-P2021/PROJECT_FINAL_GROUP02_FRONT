import React from 'react';
import { DungeonSquare } from '../../view/MapComponent/interfaceMap';
import MapSquareLegend from '../MapSquareLegend';

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

  // Get square's Events & Entities length
  function squareEventsLength() {
    let squareEventsLength = 0;
    if (
      (square.Events || square.Entities) &&
      !square.Characters &&
      !square.IsExit &&
      !square.IsImpassable &&
      square.IsDiscovered
    ) {
      squareEventsLength =
        ((square.Events && square.Events.length) || 0) + ((square.Entities && square.Entities.length) || 0);
    }
    return squareEventsLength;
  }

  return (
    <td className={getSquareClasses()}>
      {/* Square Undiscovered */}
      {!square.Characters && !square.IsExit && !square.IsImpassable && !square.IsDiscovered ? (
        <span style={{ fontSize: 25 }}>?</span>
      ) : (
        <span></span>
      )}
      {/* Square Events and Entites length */}
      {squareEventsLength() ? (
        <span style={{ fontSize: 25, position: 'absolute' }}>{squareEventsLength()}</span>
      ) : (
        <span></span>
      )}
      {/* Square Events and Entities onhover */}
      {squareEventsLength() ? <MapSquareLegend square={square} /> : <span></span>}
    </td>
  );
};
