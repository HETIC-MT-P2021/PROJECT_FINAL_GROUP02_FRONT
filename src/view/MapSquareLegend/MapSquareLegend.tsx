import React, { useState } from 'react';
import { DungeonSquare, DungeonSquareEvent, DungeonSquareEntity } from '../MapComponent/interfaceMap';

export interface Props {
  square: DungeonSquare;
}

const displayDoneEvent = {
  color: 'red'
};

export const MapSquareLegend: React.FunctionComponent<Props> = ({ square }) => {
  const [hover, setHover] = useState({ display: 'none' });

  const onHover = () => {
    setHover({ display: 'block' });
  };
  const onLeave = () => {
    setHover({ display: 'none' });
  };

  // Events for square displayed when square hover
  const squareEventsInfos =
    square.Events &&
    square.Events.map((event: DungeonSquareEvent, index) => {
      const isEventDone = event.WasActivated && !event.IsAlwaysActive;

      return (
        <div style={isEventDone ? displayDoneEvent : {}} key={index}>
          {event.Name}
        </div>
      );
    });
  // Entities for square displayed when square hover
  const squareEntitesInfos =
    square.Entities &&
    square.Entities.map((entity: DungeonSquareEntity, index) => {
      const isEntityDead = !entity.IsAlive;

      return (
        <div style={isEntityDead ? displayDoneEvent : {}} key={index}>
          {entity.Name}
        </div>
      );
    });

  return (
    <div className="square-legend" onMouseEnter={onHover} onMouseLeave={onLeave}>
      <div style={hover} className="square-legend-content">
        <div>{squareEventsInfos}</div>
        <div>{squareEntitesInfos}</div>
      </div>
    </div>
  );
};
