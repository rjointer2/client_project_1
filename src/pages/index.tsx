
import { useQuery } from '@apollo/client';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

import io, { Socket } from 'socket.io-client';
import { me } from '../@apollo_client/querys/userQuery';

import useCanvas from '../hooks/useCanvas';
import useControllerHook from '../hooks/useControllerHook';
import { client } from '../typeDef/gameTypeDefs';

const socket = io('http://localhost:1212');

const Home: NextPage = () => {


  const  {data} = useQuery(me)

  console.log("test", data)

  return (
    <div>
      Home Page
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