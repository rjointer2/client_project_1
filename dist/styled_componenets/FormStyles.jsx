"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormContainer = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.FormContainer = styled_components_1.default.form `
    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;
    top: 20vh;

    .Group {
        display: flex;
        flex-direction: column;

        label {
            margin: 10px 0 10px 0;
            font-size: 25px;
            width: 250px;
        }
    }

    .Button {
        position: relative;
        right: 70px;
        margin: 10px 0 10px 0;
    }

    button {
        background: #676784;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;

        align-self: left;
        padding: 10px;
        font-size: 20px;
    }

`;
