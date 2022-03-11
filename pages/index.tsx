import { useQuery } from '@apollo/client';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useLayoutEffect, useState } from 'react';

import io from 'socket.io-client';
import { USERS } from '../apollo_client/querys/users';
import { Rectangle } from '../typeDef/gameTypeDefs';


const Home: NextPage = () => {

  const [cli, setCli] = useState(0);
  const [clientsState, setClientsState] = useState(0)

  class Rectangle {
    height: number
    width: number
    jumping: boolean
    x_velocity: number
    x: number // on the ground
    y_velocity: number
    y: number
    constructor() {
      this.height = 32;
      this.width = 32;
      this.jumping = false;
      this.x_velocity = 0;
      this.x = 0;
      this.y_velocity = 0;
      this.y = 0;
    }
  }

  let clientsStateFrsetClientsStateomServer: { [id: string]: any } = {};

  useLayoutEffect(() => {
    fetch('/api/socket').finally(() => {
      const socket = io();

      socket.emit('newClient', new Rectangle());
      socket.on('clientsConnectedToServer', clientsState =setClientsState> {
        setCli(Object.keys(clientsState).setClientsStatelength)
      });

      

      let context = document.querySelector("canvas")?.getContext('2d') as CanvasRenderingContext2D

      context.canvas.height = 180;
      context.canvas.width = 320;

      const loop = () => {

        socket.emit('emitServerRequest');
        socket.on('emitServerResponse', res => {

         for( let id in res ) {
          context.fillStyle = '#202020';
          // This erases the color behind and around the square, because it
          // didn't we will get a contiouns stroke
          context.fillRect(0, 0, 320, 180);
          // This keeps the player stroking the canvas
      
          // i don't want both to be red
          context.fillStyle = '#ff0000';// layer color: ;
          // makes a new square
          context.beginPath();
          // the dimessional of the player
          context.rect(res[id].x, res[id].y, res[id].width, res[id].height);

          context.fill()

            // physics
          
              // velocity is 1.5 every frame
              res[id].y_velocity += 0.4; // gravity of the canvas
              res[id].x += res[id].x_velocity;
              res[id].y += res[id].y_velocity;
    
              // friction -> slow gradually
    
              res[id].x_velocity *= 0.9;
              res[id].y_velocity *= 0.9;
    
              // ground detection
    
              if ( res[id].y > 180 - 16 - 32 ) {
    
                  res[id].jumping = false;
                  res[id].y = 180 - 16 - 32;
    
                  // once the res[id] hits the ground, your veclocity should stop
                  // instantly
                  res[id].y_velocity = 0;
    
              }
         }

        })

        window.requestAnimationFrame(loop)
      }

      window.requestAnimationFrame(loop)

    })
  }, [])

  return <div>
    {cli}<br/>
    <canvas></canvas>
  </div>


}

export default Home


/* 

socket.on('clientsConnectedToServer', ( clientsState: setClientsState{ [key: string]: any } ) => {
        console.log(clientsState)
setClientsState        for( let id in connectedClients ) {
          let clientsFound: { [key: string]: any } = {};
          if( connectedClientsFromServer[id] === undefined && id !== socket.id ) {
            connectedClientsFromServer[id] = new Rectangle();
          }
          clientsFound[id] = true;
        }

        for( let id in connectedClientsFromServer) {
          if(!connectedClientsFromServer[id]) {
            delete connectedClientsFromServer[id]
          }
        }

        console.log(connectedClientsFromServer)
      })
*/
