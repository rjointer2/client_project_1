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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// next
const router_1 = require("next/router");
// react 
const react_1 = __importStar(require("react"));
const Canvas_1 = __importDefault(require("../../components/Canvas/Canvas"));
const ChatBox_1 = __importDefault(require("../../components/ChatBox/ChatBox"));
const ChatInput_1 = __importDefault(require("../../components/ChatInput/ChatInput"));
const Navbar_1 = __importDefault(require("../../components/Navbar/Navbar"));
const PlayerQueue_1 = __importDefault(require("../../components/PlayerQueue/PlayerQueue"));
// hooks
const useSocket_1 = require("../../hooks/useSocket");
function Room() {
    const socket = (0, useSocket_1.useSocket)();
    const router = (0, router_1.useRouter)();
    const { id } = router.query;
    (0, react_1.useEffect)(() => {
        if (id)
            socket.emit('joinRoom', id);
        socket.on(useSocket_1.$$redirect, (res) => {
            router.replace(`/${res}`);
        });
    }, [id]);
    return (<div>
            <Navbar_1.default />
            <div style={{
            display: 'flex', alignItems: 'center', flexDirection: 'column',
            marginTop: '2.5vh',
        }}>
            <div style={{
            display: 'flex', flexDirection: 'row',
            marginTop: '2.5vh',
        }}> 
                <PlayerQueue_1.default />
                <Canvas_1.default />
            </div>
            <ChatBox_1.default />
            <ChatInput_1.default />
        </div>
        </div>);
}
exports.default = Room;
