
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


/** 
 * @name $$createRoom
 * @description when used emitting method, take 1 arg of the room to send to server
 * 
*/
export const $$createRoom = 'createRoom'
/** 
 * @name $$roomCreated
 * @description when used with on method, receives 1 arg in callback of boolean to determine
 * if room is created
 * 
*/
export const $$roomCreated = 'roomCreated'
/** 
 * @name $$joinRoom
 * @description when used with emit takes 1 arg, as the roon name and joins any user to room
 * 
*/
export const $$joinRoom = 'joinRoom'
/** 
 * @name $$updateRooms
 * @description takes 3 args with emit, the room name a string type to dispatch to the server and
 * and the data sending to server
 * @params "room name", "action type", "data / value"
 * 
*/
export const $$updateRooms = 'updateRooms'
/** 
 * @name $$redirct
 * @description receive a string value of the page for nextjs to redirect
 * 
*/
export const $$redirect = 'redirect'
/** 
 * @name $$disconnectFromRoom
 * @description unused for now
 * 
*/
export const $$disconnectFromRoom = 'disconnectFromRoom';
/** 
 * @name $$updatePlayerQueue
 * @description receives a dictionary of all clients connected to a join 
 * 
*/
export const $$updatePlayerQueue = 'updatePlayerQueue';
/** 
 * @name $$sendChat
 * @description a on methods that recives a object of the chat sent
 * 
*/
export const $$sendChat = 'sendChat';