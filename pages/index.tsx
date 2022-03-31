import { useQuery } from '@apollo/client';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

import io from 'socket.io-client';
import { USERS } from '../apollo_client/querys/users';
import { Rectangle, ServerClientDiction } from '../typeDef/gameTypeDefs';

const socket = io('http://localhost:1212');

const Home: NextPage = () => {

  class Vector {
    x: number;
    y: number;
    constructor( x: number , y: number ) {
      this.x =  x
      this.y =  y
    }

    add( v: Vector ) {
      return new Vector( this.x+v.x, this.y+v.y )
    }

    subtract ( v: Vector ) {
      return new Vector( this.x-v.x, this.y-v.y )
    }

    mag() {
      return Math.sqrt( this.x**2 + this.y**2 )
    }

    mult( n: number ) {
      return new Vector( this.x*n, this.y*n )
    } 
 

  }
 
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1
    console.log(renderCount.current)
  })

  const [ clis, setClis ] = useState({})
  const [ id, setId ] = useState('')

  console.log(id)
  

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [ ctx, setCtx ] = useState<null | CanvasRenderingContext2D>(null);


  useEffect(() => {
    const mouse = ( e: MouseEvent ) => socket.emit('move', { id: id, x: e.clientX, y: e.clientY });

      window.addEventListener('mousemove', mouse)

      return () => {
        window.removeEventListener('mousemove', mouse)
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
        renderContext.lineTo( data[i].x - data[i].dx * 5, data[i].y )
        renderContext.strokeStyle = "red";
        renderContext.stroke();

        renderContext.beginPath();
        renderContext.moveTo(data[i].x, data[i].y)
        renderContext.lineTo( data[i].x, data[i].y - data[i].dy * 5 )
        renderContext.strokeStyle = "blue";
        renderContext.stroke();

      }
      setClis( data )
      console.log(data[id])
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

