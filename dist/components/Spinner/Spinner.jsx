"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const SpinnerStyles_module_css_1 = __importDefault(require("./SpinnerStyles.module.css"));
function Spinner() {
    return (<div className={SpinnerStyles_module_css_1.default.spinner}></div>);
}
exports.default = Spinner;
