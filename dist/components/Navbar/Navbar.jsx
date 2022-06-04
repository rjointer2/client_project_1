"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const MenuBarStyles_1 = require("../../styled_componenets/MenuBarStyles");
function Navbar() {
    return (<MenuBarStyles_1.BarContainer>
        <div className='Main'>Something</div>
        <div className='Sub'>
            <div>
                Else
            </div>
            <div>
                Else
            </div>
        </div>
    </MenuBarStyles_1.BarContainer>);
}
exports.default = Navbar;
