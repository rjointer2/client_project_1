import { useQuery } from '@apollo/client';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

import io from 'socket.io-client';
import { USERS } from '../apollo_client/querys/users';
import { Rectangle, ServerClientDiction } from '../typeDef/gameTypeDefs';

const socket = io('http://localhost:1212');

const Home: NextPage = () => {

  const [ position, setPositons ] = useState({ x: 20, y: 20 });
  const [ clis, setClis ] = ({ a: 0, b: 0 })
  

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [ ctx, setCtx ] = useState<null | CanvasRenderingContext2D>(null);



  useEffect(() => {

    if(!canvasRef.current) return;
    const renderContext = canvasRef.current.getContext('2d');

    if(!renderContext) return;
    setCtx(() => {
      renderContext.fillRect(
        position.x, position.y, 20, 20
      )
      return renderContext
    })
    
    socket.on('position', data => {
      // canvas will not rendering unless socket receives data
      for( let i in clis ) {
        renderContext.clearRect( 0, 0, 640, 480 )
        renderContext.fillRect(
          data.x, data.y, 20, 20
        )
      }
      setPositons(position)
    
    })

    window.addEventListener('keydown', (e) => {
      socket.emit('move', e.keyCode)
    })

  }, [ctx])

  return <div>

    hello
    <canvas ref={canvasRef} width="640"
      height="480"
      style={{ border: "1px solid black" }}
    ></canvas>
  </div>

}

export default Home