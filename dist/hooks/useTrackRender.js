"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useTrackRender = () => {
    const ref = (0, react_1.useRef)(0);
    (0, react_1.useEffect)(() => {
        ref.current = ref.current + 1;
        console.log(ref.current);
    }, []);
};
exports.default = useTrackRender;
