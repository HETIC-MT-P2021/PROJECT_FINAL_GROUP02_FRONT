import React from 'react';
import socketio from 'socket.io-client';

const apiPort = process.env.REACT_APP_BACK_DOCKER_API_PORT;
const SOCKET_URL = `ws://localhost:${apiPort}`;

export const socket = socketio.connect(SOCKET_URL, {
  transports: ['websocket']
});

export const SocketContext = React.createContext();
