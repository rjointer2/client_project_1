import { useQuery } from '@apollo/client';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useLayoutEffect, useState } from 'react';

import io from 'socket.io-client';
import { USERS } from '../apollo_client/querys/users';


const Home: NextPage = () => {

  const [frame, setFrame] = useState(0)


  useLayoutEffect(() => {
    
      fetch('./api/socket').finally(() => {
        const socket = io();

        let context = document.querySelector("canvas")?.getContext('2d') as CanvasRenderingContext2D

        context.canvas.height = 180;
        context.canvas.width = 320;

        // define the propteries and dimesion of the rectangle

        let rectangle = {
            height: 32,
            width: 32,
            // we have access to this prop so when it's jumping we define 
            // flase in the air
            jumping: true,
            x_velocity: 0,
            x: 144, // on the ground
            y_velocity: 0,
            y: 0,
        }

        // now let's merge the controller logic with the physics

        const loop = function() {
          // wall detection

          // we have to give the canvas gray filling
          context.fillStyle = '#202020';
          // This erases the color behind and around the square, because it
          // didn't we will get a contiouns stroke
          context.fillRect(0, 0, 320, 180);
          // This keeps the rectangle stroking the canvas
          context.fillStyle = "#ff0000";// hex for red
          context.beginPath();
          // the dimessional of the rectangle
          context.rect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
          context.fill();

          context.strokeStyle = "#202020";
          context.lineWidth = 4;
          context.beginPath();
          context.moveTo(0, 164);
          context.lineTo(320, 164);
          context.stroke();

          socket.emit('object', {
            rectangle
          });

          socket.on('assignObj', obj => {
            rectangle = obj.rectangle
            console.log(rectangle)
          })

          window.requestAnimationFrame(loop);
        }

        /* window.addEventListener('keyup', (e) => {
            socket.emit('object', {
              rectangle,
              keyCode: e.keyCode,
              type: e.type
            })
        }) */

        /* window.addEventListener("keydown", (e) => {
          socket.emit('control', { 
            keyCode: e.keyCode,
            type: e.type
           })
          socket.on('emitControl', e => {
            controller.keyListener(e)
          })
        });
        window.addEventListener("keyup", (e) => {
          socket.emit('control', { 
            keyCode: e.keyCode,
            type: e.type
           })
          socket.on('emitControl', e => {
            controller.keyListener(e)
          })
        });
        */

        window.requestAnimationFrame(loop); 

      })

  }, [])

  return <div>
    { typeof window && <canvas></canvas> }
  </div>


























/* 



*/


}

export default Home
