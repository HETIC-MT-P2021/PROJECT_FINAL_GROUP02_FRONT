import React from 'react';

export interface Props {
  gridX: number;
  gridY: number;
  dungeonMapGroup: any;
}

export const MapGrid: React.FunctionComponent<Props> = ({ gridX, gridY, dungeonMapGroup }) => {
  function getGridClasses(x: number, y: number) {
    let classes = 'grid ';
    // classes += dungeonMapGroup[x][y].player ? "player-pos " : "";
    classes += dungeonMapGroup[x][y].isExit ? 'exit-grid ' : '';
    classes += dungeonMapGroup[x][y].impassable ? 'impassable-grid ' : '';
    return classes;
  }

  return <td className={getGridClasses(gridX, gridY)}></td>;
};
