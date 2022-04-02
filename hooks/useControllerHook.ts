
import { Dispatch, SetStateAction, useEffect } from "react";
import { Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import { client } from "../typeDef/gameTypeDefs";

export default function useControllerHook( 
    clis: client, id: string, 
    socket:  Socket<DefaultEventsMap, DefaultEventsMap>, 
    setState: Dispatch<SetStateAction<client>> 
) {

    useEffect(() => {

        const controller = ( e: MouseEvent ) => {
          if(!clis[id]) return;
          socket.emit('move', { id: id, x: e.clientX, y: e.clientY, hold: false });
        }
    
        const holdEgg = ( e: KeyboardEvent  ) => {
          console.log( e.key === ' ' )
          let bool = e.key === ' ';
          if(!clis[id]) return;
          console.log(bool)
          socket.emit('move', { id: id, x: clis[id].x, y: clis[id].y, hold: true })
        }
    
          window.addEventListener('mousemove', controller);
          window.addEventListener('keydown', holdEgg)
    
          return () => {
            window.removeEventListener('mousemove', controller)
            window.removeEventListener('keydown', holdEgg)
          }
    
    })

}