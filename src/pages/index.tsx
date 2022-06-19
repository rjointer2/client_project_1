

// next 
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

// react
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

// socket 
import io, { Socket } from 'socket.io-client';

import Navbar from '../components/Navbar/Navbar';


// hooks
import useCanvas from '../hooks/useCanvas1';
import useControllerHook from '../hooks/useControllerHook';

import { client } from '../typeDef/gameTypeDefs';
import FindOrCreateRoom from '../components/FindOrCreateRoom/FindOrCreateRoom';

const socket = io('http://localhost:1212');

const Home: NextPage = () => {



  return (
    <div>
      <Navbar />
      <FindOrCreateRoom />
    </div>
  )

}

export default Home



/* 

const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1
  })

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [ clis, setClis ] = useState<client>({})
  const [ id, setId ] = useState('')
  const [ ctx, setCtx ] = useState<null | CanvasRenderingContext2D>(null);




  useControllerHook( clis, id, socket, setClis );
  useCanvas( canvasRef, setCtx, socket, setId, setClis, ctx, clis, id );

  return <div>

    hello
    <canvas ref={canvasRef} width="640"
      height="480"
      style={{ border: "1px solid black" }}
    ></canvas>
    <br/>
    
  </div>
*/