

// next 
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

// react
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

// socket 
import io, { Socket } from 'socket.io-client';

import Navbar from '../components/Navbar/Navbar';

// components
import FindOrCreateRoom from '../components/FindOrCreateRoom/FindOrCreateRoom';

// hooks
import useTrackRender from '../hooks/useTrackRender';
import cache from '../@apollo_client/configs/cache';
import { ME } from '../@apollo_client/querys/userQuery';
import { useCache } from '../@apollo_client/resolvers/userResolvers';


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