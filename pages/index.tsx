import { useQuery } from '@apollo/client';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

import io from 'socket.io-client';
import { USERS } from '../apollo_client/querys/users';
import { Rectangle, ServerClientDiction } from '../typeDef/gameTypeDefs';

const socket = io('http://localhost:1212');

const Home: NextPage = () => {


  const [ clis, setClis ] = useState({ a: 0, b: 0 })
  const [ id, setId ] = useState('')

  console.log(id)
  

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [ ctx, setCtx ] = useState<null | CanvasRenderingContext2D>(null);


  useEffect(() => {
    const controller = () => {
      socket.emit('move', id)
    }

     window.addEventListener('keydown', controller)

    return () => {
      window.removeEventListener('keydown', controller)
    }
  })

  useEffect(() => {

    if(!canvasRef.current) return;
    const renderContext = canvasRef.current.getContext('2d');

    if(!renderContext) return;
    setCtx(() => {
/*       renderContext.fillRect(
        position.x, position.y, 20, 20
      ) */
      return renderContext
    })

    socket.emit('newClient', { color: 'red', x: Math.floor(Math.random() * 200), y: 200 })
    socket.on('registerId', data => setId(data))
    socket.on('position', data => {
      renderContext.clearRect( 0, 0, 640, 480 )
      for( let i in data ) {
        renderContext.fillRect(
          data[i].x, data[i].y, 20, 20
        )
      }
      setClis( data )
      console.log(data)
    })


    window.addEventListener('keydown', (e) => {
      socket.emit('move', id)
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