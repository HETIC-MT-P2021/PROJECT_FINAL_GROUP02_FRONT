import React, { useEffect, useState, ReactElement } from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import utils from '../../utils/utils';
import { DungeonParams, DungeonSquare, SquareCoord, Map } from './interfaceMap';
import Infos from '../Infos';
import Stats from '../Stats';
import MapSquare from '../MapSquare';

export interface Props {}

export const MapComponent: React.FunctionComponent<Props> = () => {
  const socket = new WebSocket('ws://127.0.0.1:8083/ws');
  const { dungeonId } = useParams<DungeonParams>();

  const [isDungeonExist, setIsDungeonExist] = useState(true);
  const [isDungeonReady, setIsDungeonReady] = useState(false);
  const [map, setMap] = useState<ReactElement[]>([]);

  // Return number of rows and columns of the map
  function numberOfSquares(dungeonSquares: DungeonSquare[], squareCoord: string): number {
    const axis = squareCoord as keyof SquareCoord;
    const dungeonSquaresAxis = dungeonSquares.map((square) => square[axis]);
    return Math.max(...dungeonSquaresAxis) + 1;
  }

  function getMap(dungeonSquares: DungeonSquare[], mapSquares: Map): ReactElement[] {
    const map = [];
    for (let x = 0; x < numberOfSquares(dungeonSquares, 'X'); x++) {
      const lane = [];
      for (let y = 0; y < numberOfSquares(dungeonSquares, 'Y'); y++) {
        lane.push(<MapSquare key={x + '' + y} squareX={x} squareY={y} mapSquares={mapSquares}></MapSquare>);
      }
      map.push(<tr key={x}>{lane}</tr>);
    }
    return map;
  }

  useEffect(() => {
    socket.onopen = () => {
      console.log('Welcome to socket');
      socket.send(
        JSON.stringify({
          message: `${dungeonId}`,
          event: 'eventDungeonId'
        })
      );
    };

    // TODO: Refacto websokect like onmessage('notif1', event)
    socket.onmessage = (event) => {
      const eventData = JSON.parse(event.data);
      if (eventData.Event == 'EventDungeonSquares') {
        const dungeonSquares = eventData.Message;

        if (dungeonSquares && dungeonSquares.length) {
          const mapSquares = utils.buildMap(dungeonSquares);

          const map = getMap(dungeonSquares, mapSquares);
          setMap(map);

          setIsDungeonReady(true);
        }
        setIsDungeonExist(dungeonSquares && dungeonSquares.length);
      }
    };
    return () => {
      socket.close();
    };
  }, []);

  return (
    <div className="text-center">
      {isDungeonExist ? (
        <div>
          {!isDungeonReady ? (
            <Spinner style={{ marginTop: 20 }} animation="border" variant="primary" />
          ) : (
            <div>
              <div id="map-title" className="text-center">
                DUNGEON {dungeonId}
              </div>
              <div className="full-map">
                <div className="map-content">
                  {/* Infos */}
                  <Infos />
                  {/* Map */}
                  <table>
                    <tbody>{map}</tbody>
                  </table>
                  {/* Stats */}
                  <Stats />
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div style={{ marginTop: 20 }}>Dungeon {dungeonId} not exist.</div>
      )}
    </div>
  );
};
