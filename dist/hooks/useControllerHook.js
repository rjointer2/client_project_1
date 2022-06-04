"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
let map = {};
function useControllerHook(clis, id, socket, setState) {
    (0, react_1.useEffect)(() => {
        const emitDirectionsKeyDown = (e) => {
            map[e.key] = true;
            console.log(e.key);
            socket.emit('move', { id: id, direction: map });
        };
        const emitDirectionsKeyUp = (e) => {
            map[e.key] = false;
            socket.emit('move', { id: id, direction: map });
        };
        const holdEgg = (e) => {
            if (e.key === 'q')
                socket.emit('holdMagicBall', { id: id, direction: map, hold: map['q'] = true });
        };
        const releaseEgg = (e) => {
            if (e.key === 'q')
                socket.emit('holdMagicBall', { id: id, direction: map, hold: map['q'] = false });
        };
        const aimEgg = (e) => {
            if (!map['q'])
                return;
            socket.emit('aimMagicBall', { id: id, mx: e.clientX - 40, my: e.clientY });
        };
        window.addEventListener('keydown', emitDirectionsKeyDown);
        window.addEventListener('keyup', emitDirectionsKeyUp);
        window.addEventListener('keydown', holdEgg);
        window.addEventListener('keyup', releaseEgg);
        window.addEventListener('mousemove', aimEgg);
        return () => {
            window.removeEventListener('keydown', emitDirectionsKeyDown);
            window.removeEventListener('keyup', emitDirectionsKeyUp);
            window.removeEventListener('keydown', holdEgg);
            window.removeEventListener('keyup', releaseEgg);
            window.removeEventListener('mousemove', aimEgg);
        };
    });
}
exports.default = useControllerHook;
/*

 
    


*/ 
