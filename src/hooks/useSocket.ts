
import { createContext, useContext } from 'react';
import socketio from 'socket.io-client';

export const io = socketio('http://localhost:1212')

export const SocketContext = createContext(io);

export const useSocket = () => {
    return useContext(SocketContext)
}


/* 
    SOCKET ACTION TYPES
*/



export const $$createRoom = 'createRoom'
export const $$roomCreated = 'roomCreated'
export const $$joinRoom = 'joinRoom'
export const $$updateRooms = 'updateRooms'
export const $$redirect = 'redirect'
export const $$disconnectFromRoom = 'disconnectFromRoom'