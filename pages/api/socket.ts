
import { Server, ServerOptions, } from 'socket.io';
import { NextApiRequest, NextApiResponse } from 'next';


const ioHandler = (req: NextApiRequest, res: any) => {


    if(!res.socket.server.io) {
        console.log(`starting the socket TCP`);

        const io = new Server(res.socket.server);

        type data = {id: string, data: null }
        let users: Array<data> = [];

        io.on('connection', socket => {

            socket.on('object', obj => {
                
                const controller = {

                    left: false,
                    right: false,
                    up: false,
                    keyListener: function (event: any) {
                        // state of the key
          
                        let key_state = (event.type == "keydown") ? true : false;
                        console.log(event.keyCode)
          
                        switch(event.keyCode) {
          
                            case 37: // left key
                            controller.left = key_state;
                            break;
                            case 38: // up key
                            controller.up = key_state;
                            break;
                            case 39: // right key
                            controller.right = key_state;
                            break;
          
                        }
                    }
          
                  }


                if(controller.up && obj.rectangle.jumping == false) {
                    obj.rectangle.y_velocity -= 20;
                    obj.rectangle.jumping = true;
                }
      
                // left controlloer input
                if(controller.left) {
                    obj.rectangle.x_velocity -= 0.2;
                }
      
                // right controller input 
                if(controller.right) {
                    obj.rectangle.x_velocity += 0.2;
                }
      
                // physics
      
                // velocity is 1.5 every frame
                obj.rectangle.y_velocity += 0.4; // gravity of the canvas
                obj.rectangle.x += obj.rectangle.x_velocity;
                obj.rectangle.y += obj.rectangle.y_velocity;
      
                // friction -> slow gradually
      
                obj.rectangle.x_velocity *= 0.9;
                obj.rectangle.y_velocity *= 0.9;
      
                // ground detection
      
                if ( obj.rectangle.y > 180 - 16 - 32 ) {
      
                    obj.rectangle.jumping = false;
                    obj.rectangle.y = 180 - 16 - 32;
      
                    // once the obj.rectangle hits the ground, your veclocity should stop
                    // instantly
                    obj.rectangle.y_velocity = 0;
      
                }

                socket.emit('assignObj', obj)
            }) 

           /* socket.on('control', e => {
               console.log(e)
               socket.emit('emitControl', e)
           }); */

        });

        res.socket.server.io = io;
    } else {
        console.log(`socket running already`)
    }

    res.end();
};

export const config = {
    api: {
        bodyParser: false
    }
}

export default ioHandler

/* 

 socket.broadcast.emit('new user connected');

            class User {
                id: string
                data: null 
                constructor ({ id, data } : { id: string, data: null }) {
                    this.id = id;
                    this.data = data;
                }
            }

            users.push(new User({ id: socket.id, data: null }));
            console.log(users)
            io.emit('clientsOnline', users);

            socket.emit('assignClient', users.slice(-1)[0])
            socket.on('assigned', user => {
                console.log(user)
            })


           


            socket.on('disconnect', () => {
                users = users.filter(( user ) => user.id !== socket.id)
                io.emit('clientsOnline', users)
                console.log(`after disconnection: ${users}`)
            })

*/