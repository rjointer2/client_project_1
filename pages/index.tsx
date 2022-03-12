import { useQuery } from '@apollo/client';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

import io from 'socket.io-client';
import { USERS } from '../apollo_client/querys/users';
import { Rectangle, ServerClientDiction } from '../typeDef/gameTypeDefs';


const Home: NextPage = () => {

  const [ ctx, setCtx ] = useState<null | CanvasRenderingContext2D>(null);
  const canvasRef = useRef<null | HTMLCanvasElement>(null);

  const [ clis, setClis ] = useState<ServerClientDiction>({})


  useEffect(() => {
    
    if(canvasRef.current) {
      
      const renderContext = canvasRef.current.getContext('2d');

      if(renderContext) setCtx(() => {
        renderContext.canvas.height = 240;
        renderContext.canvas.width = 320;
        renderContext.fillStyle = '#3f3a4bf4';
        renderContext.fillRect(0, 0, renderContext.canvas.width, renderContext.canvas.width);
        return renderContext
      })

    }

    if(ctx) {
      
      let Rectangle = function({ color } : { color: string }) {
        return {
          height: 32, width: 32, jumping: false,
          x_velocity: 0, y_velocity: 0, x: Math.floor(Math.random() * ctx.canvas.width),
          y: 0, color,
        }
      }

      fetch('/api/socket').finally(() => {

        const socket = io();

        socket.emit('newClient', Rectangle({ color: '#ff0000' }));
        socket.on('currentClients', ( clientsOnline: ServerClientDiction ) => setClis(clientsOnline) )

      })


      /* setArr(() => {
        arr.forEach((ar) => {
          ctx.beginPath();
          // we have to give the canvas gray filling
          ctx.rect(ar.x, ar.y, ar.width, ar.height);
          // so blue is working now! just no input
          ctx.fillStyle = ar.color;// layer color: ;
          ctx.fill();
        })
        return arr
      }) */

    }

  }, [ctx])



  return <div>
    {Object.keys(clis).length} Online<br/>
    <canvas ref={canvasRef}/>
  </div>

}

export default Home

