import { useQuery } from '@apollo/client';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

import io from 'socket.io-client';
import { USERS } from '../apollo_client/querys/users';
import { Rectangle, ServerClientDiction } from '../typeDef/gameTypeDefs';

const socket = io('http://localhost:1212');

const Home: NextPage = () => {

  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1
  })

  const [ clis, setClis ] = useState<{ [index: string]: {
    x: number, y: number, host: boolean, 
    height: number, width: number,  
    dx: number, dy: number, speed: number,
    hold: boolean
  }  }>({})
  const [ id, setId ] = useState('')

  

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [ ctx, setCtx ] = useState<null | CanvasRenderingContext2D>(null);


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

  useEffect(() => {

    if(!canvasRef.current) return;
    const renderContext = canvasRef.current.getContext('2d');

    if(!renderContext) return;
    setCtx(renderContext)

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
      setClis( data )
    })

  }, [ctx])


  return <div>

    hello
    <canvas ref={canvasRef} width="640"
      height="480"
      style={{ border: "1px solid black" }}
    ></canvas>
    <br/>
    
  </div>

}

export default Home

