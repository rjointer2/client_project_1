
import { Dispatch, MutableRefObject, SetStateAction, useEffect } from "react";
import { Socket } from "socket.io-client";
import { client } from "../typeDef/gameTypeDefs";
import vectorDirectionUI from "./useCanvasMethods/vectorDirectionUI";

export default function useCanvas( 
    canvasRef: MutableRefObject<HTMLCanvasElement | null>,
    setCanvas: Dispatch<SetStateAction<CanvasRenderingContext2D | null>>,
    socket: Socket,
    setId: Dispatch<SetStateAction<string>>,
    setClients:  Dispatch<SetStateAction<client>>,
    context: CanvasRenderingContext2D | null,
    clis: client,
    id: string
) {

    useEffect(() => {

        if(!canvasRef.current) return;
        const renderContext = canvasRef.current.getContext('2d');
    
        if(!renderContext) return;
        setCanvas(renderContext)

    
        socket.emit('newClient', { color: 'red', x: 30, y: 30, host: false, dx: 2, dy: 2, xDir: 'left', 
          left: false,
          right: false,
          up: false,
          down: false,
          ghostActive: false,
          speedActive: false
          
        })
        socket.on('registerId', clientId => setId(clientId))
        socket.on('position', data => {
          renderContext.clearRect( 0, 0, 640, 480 )
    
          for( let i in data ) {
    
            renderContext.fillStyle = data[i].color
            renderContext.fillRect( data[i].x, data[i].y, 20, 20 )
            
            
    
          }

          
          setClients( data )
        })

        return () => {
            
        }
    
      }, [context, id])

}