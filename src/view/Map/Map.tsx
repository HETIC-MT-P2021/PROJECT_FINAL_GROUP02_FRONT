import React from 'react';
import Infos from '../Infos';
import Stats from '../Stats';
import MapGrid from '../MapGrid';
import dungeonMap from '../../services/data/DungeonMap.json';

export interface Props {}

export const Map: React.FunctionComponent<Props> = () => {
  // Format Dungeon Map datas
  const dungeonMapGroup = dungeonMap.reduce((acc: any, grid: any) => {
    (acc[grid['x']] = acc[grid['x']] || []).push(grid);
    return acc;
  }, []);

  // Return number of rows and columns of the map
  function numberOfGrids(axis: string) {
    return Math.max(...dungeonMap.map((grid: any) => grid[axis])) + 1;
  }

  const mapGrids = [];
  for (let x = 0; x < numberOfGrids('x'); x++) {
    const lane = [];
    for (let y = 0; y < numberOfGrids('y'); y++) {
      lane.push(<MapGrid key={x + '' + y} gridX={x} gridY={y} dungeonMapGroup={dungeonMapGroup}></MapGrid>);
    }
    mapGrids.push(<tr key={x}>{lane}</tr>);
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
          {/* Map grids */}
          <table>
            <tbody>{mapGrids}</tbody>
          </table>
          {/* Stats */}
          <Stats />
        </div>
      </div>
    </div>
  );
};
