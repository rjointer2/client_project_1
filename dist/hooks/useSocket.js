"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.$$disconnectFromRoom = exports.$$redirect = exports.$$updateRooms = exports.$$joinRoom = exports.$$roomCreated = exports.$$createRoom = exports.useSocket = exports.SocketContext = exports.io = void 0;
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
exports.$$createRoom = 'createRoom';
exports.$$roomCreated = 'roomCreated';
exports.$$joinRoom = 'joinRoom';
exports.$$updateRooms = 'updateRooms';
exports.$$redirect = 'redirect';
exports.$$disconnectFromRoom = 'disconnectFromRoom';
