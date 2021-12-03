import React, { useCallback, useContext, useEffect, useState, ReactElement } from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { SocketContext } from '../../context/socket';
import { DungeonParams, DungeonSquare, Map, Player } from './interfaceMap';
import utils from '../../utils/utils';
import MapInfos from '../MapInfos';
import PlayerStats from '../PlayerStats';
import MapSquare from '../MapSquare';

export interface Props {}

export const MapComponent: React.FunctionComponent<Props> = () => {
  const { dungeonId } = useParams<DungeonParams>();
  const socket = useContext(SocketContext);

  const [isSocketConnected, setIsSocketConnected] = useState(true);
  const [isDungeonReady, setIsDungeonReady] = useState(false);
  const [isDungeonExist, setIsDungeonExist] = useState(true);
  const [map, setMap] = useState<ReactElement[]>([]);
  const [player, setPlayer] = useState<Player>();

  function getMap(dungeonSquares: DungeonSquare[], mapSquares: Map): ReactElement[] {
    const map = [];
    for (let y = 0; y < utils.numberOfColumns(dungeonSquares, 'Y'); y++) {
      const lane = [];
      for (let x = 0; x < utils.numberOfRows(dungeonSquares, 'X'); x++) {
        lane.push(<MapSquare key={y + '' + x} square={mapSquares[y][x]}></MapSquare>);
      }
      map.push(<tr key={y}>{lane}</tr>);
    }
    return map;
  }

  // Get dungeon squares data from socket
  const getDungeonSquares = useCallback((data) => {
    const dungeonSquares = data;
    if (dungeonSquares && dungeonSquares.length) {
      const mapSquares = utils.buildMap(dungeonSquares);

      const map = getMap(dungeonSquares, mapSquares);
      setMap(map);

      // Get player's current position
      const playerPosition = dungeonSquares.find((square: DungeonSquare) => square && square.Characters);

      if (playerPosition) setPlayer(playerPosition.Characters[0]);

      setIsDungeonReady(true);
    }
  }, []);

  // Update dungeon squares data from socket
  const updateDungeonSquares = useCallback(() => {
    socket.emit('/getDungeonSquares', { message: `${dungeonId}` });
  }, []);

  // Add client to socket room when connection
  const welComeToRoom = useCallback(() => {
    socket.emit('/joinRoom', { message: `${dungeonId}` });
  }, []);

  // Remove client to socket room when disconnection
  const LeaveRoom = useCallback(() => {
    socket.emit('/leaveRoom', { message: `${dungeonId}` });
  }, []);

  setTimeout(() => {
    setIsSocketConnected(socket.connected);
    if (!isDungeonReady) {
      setIsDungeonExist(false);
    }
  }, 1000);

  useEffect(() => {
    // subscribe to socket events
    socket.on('/welcome', welComeToRoom);

    socket.emit('/getDungeonSquares', { message: `${dungeonId}` });
    socket.on('/dungeonSquares', getDungeonSquares);

    socket.on('/updateDungeonSquares', updateDungeonSquares);

    socket.on('/disconnected', LeaveRoom);
  }, []);

  return (
    <div className="text-center">
      {isSocketConnected ? (
        <div>
          {!isDungeonReady ? (
            <div style={{ marginTop: 20 }}>
              {isDungeonExist ? (
                <Spinner animation="border" variant="primary" />
              ) : (
                <span>Dungeon {dungeonId} does not exist.</span>
              )}
            </div>
          ) : (
            <div>
              <div id="map-title" className="text-center">
                DUNGEON {dungeonId}
              </div>
              <div className="full-map">
                <div className="map-content">
                  {/* MapInfos */}
                  <MapInfos />
                  {/* Map */}
                  <table>
                    <tbody>{map}</tbody>
                  </table>
                  {/* PlayerStats */}
                  {player ? <PlayerStats player={player} /> : <div>Stats not available</div>}
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <span>Unable to connect to the server socket. Please check your Internet connection.</span>
      )}
    </div>
  );
};
