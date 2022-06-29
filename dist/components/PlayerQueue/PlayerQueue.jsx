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
const useSocket_1 = require("../../hooks/useSocket");
const useUser_1 = require("../../hooks/useUser");
function PlayerQueue() {
    const [clients, setClients] = (0, react_1.useState)({
        queue: [],
        players: {}
    });
    const socket = (0, useSocket_1.useSocket)();
    const { me, loading, error } = (0, useUser_1.useCacheUser)();
    const router = (0, router_1.useRouter)();
    const { id } = router.query;
    (0, react_1.useEffect)(() => {
        if (id)
            socket.emit(useSocket_1.$$joinRoom, id, me);
        const redirect = () => {
            (res) => {
                router.replace(`/${res}`);
            };
        };
        const update = (userData) => {
            setClients(p => {
                return Object.assign(Object.assign({}, p), { queue: [...p.queue, userData] });
            });
        };
        socket.on(useSocket_1.$$redirect, redirect);
        socket.on(useSocket_1.$$updatePlayerQueue, update);
        return () => {
            socket.off(useSocket_1.$$redirect, redirect);
            socket.off(useSocket_1.$$updatePlayerQueue, update);
        };
    }, [id]);
    console.log(clients);
    return (<div>
       {clients.queue.map((value, index) => {
            return <div key={index}>
                {value.username}
               </div>;
        })}
    </div>);
}
exports.default = PlayerQueue;
