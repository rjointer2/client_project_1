
import { Dispatch, MutableRefObject, SetStateAction, useEffect } from "react";
import { Socket } from "socket.io-client";
import { client } from "../typeDef/gameTypeDefs";

export default function useCanvas( 
    canvasRef: MutableRefObject<HTMLCanvasElement | null>,
    setCanvas: Dispatch<SetStateAction<CanvasRenderingContext2D | null>>,
    socket: Socket,
    setId: Dispatch<SetStateAction<string>>,
    setClients:  Dispatch<SetStateAction<client>>,
    context: CanvasRenderingContext2D | null
) {

    useEffect(() => {

        if(!canvasRef.current) return;
        const renderContext = canvasRef.current.getContext('2d');
    
        if(!renderContext) return;
        setCanvas(renderContext)
    
        socket.emit('newClient', { color: 'red', x: 320, y: 240, host: false, dx: 0, dy: 0 })
        socket.on('registerId', clientId => setId(clientId))
        socket.on('position', data => {
          renderContext.clearRect( 0, 0, 640, 480 )
    
          for( let i in data ) {
    
            renderContext.fillRect(
              data[i].x - 10, data[i].y - 10, 20, 20
            )
    
            renderContext.beginPath();
            renderContext.moveTo(data[i].x, data[i].y)
            renderContext.lineTo( data[i].x + data[i].dx * -5, data[i].y )
            renderContext.strokeStyle = "red";
            renderContext.stroke();
    
            renderContext.beginPath();
            renderContext.moveTo(data[i].x, data[i].y)
            renderContext.lineTo( data[i].x, data[i].y + data[i].dy * -5 )
            renderContext.strokeStyle = "blue";
            renderContext.stroke();
    
          }
          setClients( data )
        })
    
      }, [context])

}