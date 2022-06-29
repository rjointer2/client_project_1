"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("next/router");
const react_1 = __importStar(require("react"));
// styles
const react_bootstrap_1 = require("react-bootstrap");
const useSocket_1 = require("../../hooks/useSocket");
function FindOrCreateRoom() {
    const socket = (0, useSocket_1.useSocket)();
    const router = (0, router_1.useRouter)();
    const [localState, setLocalState] = (0, react_1.useState)({
        roomIsInValid: false, roomIsValid: false,
        scoreIsInValid: false, scoreIsValid: false,
        roomName: "", message: ''
    });
    const submitHandler = (e) => {
        e.preventDefault();
        socket.emit(useSocket_1.$$createRoom, localState.roomName);
        const handleRequestFromSocketServer = (isRoomCreated) => {
            if (isRoomCreated) {
                router.replace(`/room/${localState.roomName}`);
            }
            setLocalState(s => {
                return Object.assign(Object.assign({}, s), { message: 'Room name taken already...' });
            });
        };
        socket.on(useSocket_1.$$roomCreated, handleRequestFromSocketServer);
        return () => {
            socket.off(useSocket_1.$$roomCreated, handleRequestFromSocketServer);
        };
    };
    const eventHandler = (e) => {
        const { name, value } = e.currentTarget;
        setLocalState(s => { return Object.assign(Object.assign({}, s), { [name]: value, scoreIsInValid: false, message: '' }); });
    };
    return (<div style={{ paddingTop: '30vh' }}>
        <react_bootstrap_1.Form onSubmit={submitHandler}>
  
            <react_bootstrap_1.Form.Group className="mb-3">
                <react_bootstrap_1.Form.Label>Create Room Name</react_bootstrap_1.Form.Label>
                <react_bootstrap_1.Form.Control type="name" placeholder="Please Enter Email" isInvalid={localState.roomIsInValid} isValid={localState.roomIsValid} name="roomName" onChange={(e) => eventHandler(e)}/>
            </react_bootstrap_1.Form.Group>
  
  
  
            <div style={{ display: 'flex', flexDirection: "column" }}>
                <br />
                <react_bootstrap_1.Button variant="primary" type="submit" style={{ display: 'flex', justifyContent: 'center' }}>
                    Create Room
                </react_bootstrap_1.Button>
                <br /> <br />
  
                
                <react_bootstrap_1.Form.Text className="text-muted" style={{ color: 'red' }}>
                    {localState.message ? localState.message : null}
                </react_bootstrap_1.Form.Text>
            </div>
        </react_bootstrap_1.Form>
      </div>);
}
exports.default = FindOrCreateRoom;
