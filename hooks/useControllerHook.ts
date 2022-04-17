
import { Dispatch, SetStateAction, useEffect } from "react";
import { Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import { client } from "../typeDef/gameTypeDefs";

let map: { [index: KeyboardEvent["key"]]: boolean } = {};

export default function useControllerHook( 
    clis: client, id: string, 
    socket:  Socket<DefaultEventsMap, DefaultEventsMap>, 
    setState: Dispatch<SetStateAction<client>> 
) {

    useEffect(() => {

        const emitDirectionsKeyDown = ( e: KeyboardEvent ) => {
            map[ e.key ] = true;
            console.log(e.key)
            socket.emit('move', { id: id, direction: map });
        }

        const emitDirectionsKeyUp = ( e: KeyboardEvent ) => {
            map[ e.key ] = false
            socket.emit('move', { id: id, direction: map });
        }

        const holdEgg = ( e: KeyboardEvent ) => {
            if( e.key === 'q' ) socket.emit('holdEgg', { id: id, direction: map, hold: map['q'] = true });
        }

        const releaseEgg = ( e: KeyboardEvent ) => {
            if( e.key === 'q' ) socket.emit('holdEgg', { id: id, direction: map, hold: map['q'] = false });
        }

        const aimEgg = ( e: MouseEvent ) => {
            if( !map['q'] ) return;
            socket.emit('aimEgg', { id: id, mx: e.clientX, my: e.clientY - 20 })
        }



        window.addEventListener('keydown', emitDirectionsKeyDown);
        window.addEventListener('keyup', emitDirectionsKeyUp);

        window.addEventListener('keydown', holdEgg);
        window.addEventListener('keyup', releaseEgg);

        window.addEventListener('mousemove', aimEgg)


        return () => {

            window.removeEventListener('keydown', emitDirectionsKeyDown);
            window.removeEventListener('keyup', emitDirectionsKeyUp)

            window.removeEventListener('keydown', holdEgg);
            window.removeEventListener('keyup', releaseEgg);

            window.removeEventListener('mousemove', aimEgg)
        }
    
    })

}   