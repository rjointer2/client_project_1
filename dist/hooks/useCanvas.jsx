"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useCanvas = () => {
    (0, react_1.useEffect)(() => {
        const canvas = document.querySelector('canvas');
    }, []);
};
exports.default = useCanvas;
