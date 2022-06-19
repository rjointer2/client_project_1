"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useCanvas = () => {
    (0, react_1.useEffect)(() => {
        const canvas = document.querySelector('canvas');
        console.log(canvas);
        canvas.style.height = '800px';
        canvas.style.width = '800px';
        canvas.style.background = '#808080';
    }, []);
};
exports.default = useCanvas;
