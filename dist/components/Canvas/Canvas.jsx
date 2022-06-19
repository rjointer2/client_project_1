"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const useCanvas_1 = __importDefault(require("../../hooks/useCanvas"));
// styles
function Canvas() {
    (0, useCanvas_1.default)();
    return (<canvas />);
}
exports.default = Canvas;
