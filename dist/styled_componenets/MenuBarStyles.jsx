"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = exports.BarContainer = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const ai_1 = require("react-icons/ai");
exports.BarContainer = styled_components_1.default.div `

    display: flex;
    background-color: #e5e5e5;
    margin: 20px;

    .Main, .Sub {
        margin: 40px;
    }

    .Sub {
        display: flex;
        position: absolute;
        right: 0;

        div {
            padding: 0 10px 0 10px;
        }
        
    }

    .Main {

    }

    @media screen and ( max-width: 800px ) {
        .Sub {
            display: none;
        }
    }

`;
exports.Menu = (0, styled_components_1.default)(ai_1.AiOutlineMenu) `

    position: absolute;
    right: 0;
    margin: 40px;

    @media screen and ( min-width: 800px ) {
        display: none;
    }
`;
