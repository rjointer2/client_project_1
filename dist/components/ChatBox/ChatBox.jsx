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
const react_1 = __importStar(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const useSocket_1 = require("../../hooks/useSocket");
const ChatBox_module_css_1 = __importDefault(require("./ChatBox.module.css"));
function ChatBox() {
    const socket = (0, useSocket_1.useSocket)();
    const [messages, setMessages] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        socket.on(useSocket_1.$$sendChat, (res) => {
            setMessages(p => [...p, res]);
        });
    }, []);
    console.log(messages);
    return (<div className={ChatBox_module_css_1.default.container}>
            <react_bootstrap_1.ListGroup className={ChatBox_module_css_1.default.scrollMessages}>
                {messages.map((message, index) => {
            return <react_bootstrap_1.ListGroup.Item key={index} className="">
                        <div className={ChatBox_module_css_1.default.wrapText}>
                            {`${Object.keys(message)[0]} said: ${Object.values(message)[0]}`}
                        </div>
                    </react_bootstrap_1.ListGroup.Item>;
        })}
            </react_bootstrap_1.ListGroup>
        </div>);
}
exports.default = ChatBox;
