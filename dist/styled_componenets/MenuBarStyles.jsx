"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarContainer = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.BarContainer = styled_components_1.default.div `
    display: flex;

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

    @media screen and ( max-with: 800px ) {
        display: none;
    }
`;
