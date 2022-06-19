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
// next
const router_1 = require("next/router");
// react 
const react_1 = __importStar(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
// hooks
const useSocket_1 = require("../../hooks/useSocket");
function ChatInput() {
    const socket = (0, useSocket_1.useSocket)();
    const router = (0, router_1.useRouter)();
    const { id } = router.query;
    const [message, setMessage] = (0, react_1.useState)('');
    (0, react_1.useEffect)(() => {
        socket.on('roomCreated', (state) => {
            console.log(state);
        });
        socket.on('CHAT', (res) => {
            console.log(res);
        });
    }, []);
    const eventHandler = (e) => {
        const { name, value } = e.currentTarget;
        setMessage(value);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        socket.emit(useSocket_1.$$updateRooms, id, 'CHAT', message);
    };
    return (<div>
            <div>
                <react_bootstrap_1.Form onSubmit={submitHandler}>
        
                    <react_bootstrap_1.Form.Group className="mb-3">
                        <react_bootstrap_1.Form.Label>Send Message</react_bootstrap_1.Form.Label>
                        <react_bootstrap_1.Form.Control type="name" placeholder="Say Something!" name="roomName" onChange={(e) => eventHandler(e)}/>
                    </react_bootstrap_1.Form.Group>
        
        
        
                    <div style={{ display: 'flex', flexDirection: "column" }}>
                        <br />
                        <react_bootstrap_1.Button variant="primary" type="submit" style={{ display: 'flex', justifyContent: 'center' }}>
                            Create Room
                        </react_bootstrap_1.Button>
                    </div>
                </react_bootstrap_1.Form>
            </div>
        </div>);
}
exports.default = ChatInput;
