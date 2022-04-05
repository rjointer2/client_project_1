
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
            socket.emit('move', { id: id, direction: map, hold: false });
        }

        const emitDirectionsKeyUp = ( e: KeyboardEvent ) => {
            map[ e.key ] = false
            socket.emit('move', { id: id, direction: map, hold: false });
        }

        const holdEgg = ( e: KeyboardEvent ) => {
            if( e.key === 'Shift' ) {
                map[ 'Shift' ] = true
                socket.emit('move', { id: id, direction: map, hold: true });
            }
        }

        const releaseEgg = ( e: KeyboardEvent ) => {
            if( map['Shift'] ) {
                map[ 'Shift' ] = false
                socket.emit('move', { id: id, direction: map, hold: false  });
            }
        }




        window.addEventListener('keydown', emitDirectionsKeyDown);
        window.addEventListener('keyup', emitDirectionsKeyUp);

        window.addEventListener('keydown', holdEgg);
        window.addEventListener('keyup', releaseEgg);


        return () => {

            window.removeEventListener('keydown', emitDirectionsKeyDown);
            window.removeEventListener('keyup', emitDirectionsKeyUp)

            window.removeEventListener('keydown', holdEgg);
            window.removeEventListener('keyup', releaseEgg);
        }
    
    })

}   