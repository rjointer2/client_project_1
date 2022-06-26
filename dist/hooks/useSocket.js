"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.$$sendChat = exports.$$updatePlayerQueue = exports.$$disconnectFromRoom = exports.$$redirect = exports.$$updateRooms = exports.$$joinRoom = exports.$$roomCreated = exports.$$createRoom = exports.useSocket = exports.SocketContext = exports.io = void 0;
const react_1 = require("react");
const socket_io_client_1 = __importDefault(require("socket.io-client"));
exports.io = (0, socket_io_client_1.default)('http://localhost:1212');
exports.SocketContext = (0, react_1.createContext)(exports.io);
const useSocket = () => {
    return (0, react_1.useContext)(exports.SocketContext);
};
exports.useSocket = useSocket;
/*
    SOCKET ACTION TYPES
*/
/**
 * @name $$createRoom
 * @description when used emitting method, take 1 arg of the room to send to server
 *
*/
exports.$$createRoom = 'createRoom';
/**
 * @name $$roomCreated
 * @description when used with on method, receives 1 arg in callback of boolean to determine
 * if room is created
 *
*/
exports.$$roomCreated = 'roomCreated';
/**
 * @name $$joinRoom
 * @description when used with emit takes 1 arg, as the roon name and joins any user to room
 *
*/
exports.$$joinRoom = 'joinRoom';
/**
 * @name $$updateRooms
 * @description takes 3 args with emit, the room name a string type to dispatch to the server and
 * and the data sending to server
 * @params "room name", "action type", "data / value"
 *
*/
exports.$$updateRooms = 'updateRooms';
/**
 * @name $$redirct
 * @description receive a string value of the page for nextjs to redirect
 *
*/
exports.$$redirect = 'redirect';
/**
 * @name $$disconnectFromRoom
 * @description unused for now
 *
*/
exports.$$disconnectFromRoom = 'disconnectFromRoom';
/**
 * @name $$updatePlayerQueue
 * @description receives a dictionary of all clients connected to a join
 *
*/
exports.$$updatePlayerQueue = 'updatePlayerQueue';
/**
 * @name $$sendChat
 * @description a on methods that recives a object of the chat sent
 *
*/
exports.$$sendChat = 'sendChat';
