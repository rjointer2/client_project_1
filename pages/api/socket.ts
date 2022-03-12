
import { Server } from 'socket.io';
import { NextApiRequest } from 'next';
import { Rectangle, ServerClientDiction } from '../../typeDef/gameTypeDefs';




const ioHandler = (req: NextApiRequest, res: any) => {


    if(!res.socket.server.io) {
        console.log(`starting the socket TCP`);

        const io = new Server(res.socket.server);

        let clients: ServerClientDiction = {};

        io.on('connection', socket => {

            socket.on('newClient',  ( clientData: Rectangle ) => {
                clients[socket.id] = clientData;
                io.emit('currentClients', clients)
            });

            socket.on('disconnect', () => {
                delete clients[socket.id];
                io.emit('currentClients', clients)
            });
            
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


socket.on('newClient', ( newClient ) => {
                newClient.id = socket.id
                clients.push(newClient)
                io.emit('currentClients', clients)
            })

            socket.on('clientReqLoop', () => {
                clients.forEach((client) => {
                    // velocity is 1.5 every frame
                    client.y_velocity += 0.4; // gravity of the canvas
                    client.x += client.x_velocity;
                    client.y += client.y_velocity;
          
                    // friction -> slow gradually
          
                    client.x_velocity *= 0.9;
                    client.y_velocity *= 0.9;
          
                    // ground detection
          
                    if ( client.y > 180 - 16 - 32 ) {
          
                        client.jumping = false;
                        client.y = 180 - 16 - 32;
          
                        // once the clients[id] hits the ground, your veclocity should stop
                        // instantly
                        client.y_velocity = 0;
          
                    }
                })
                socket.emit('serverReq', clients)
            });

            socket.on('disconnect', () => {
                clients = clients.filter(( client ) => client.id !== socket.id);
                io.emit('currentClients', clients)
            })


*/