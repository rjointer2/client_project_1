
import { Server, ServerOptions, } from 'socket.io';
import { NextApiRequest, NextApiResponse } from 'next';
import { currentClient } from '../../typeDef/clientTypeDefs';


const ioHandler = (req: NextApiRequest, res: any) => {


    if(!res.socket.server.io) {
        console.log(`starting the socket TCP`);

        const io = new Server(res.socket.server);

        let clients: any = {};

        io.on('connection', socket => {

            socket.on('newClient', ( clientData ) => {
                console.log(`new client connected with id: ${socket.id}`);
                clients[socket.id] = clientData;
                console.log(clients)

                // after a new client fires the listener emit function from 
                // client then we send back from the server the length of clients
                io.emit('clientsConnectedToServer', clients)
            })

            socket.on('emitServerRequest', () => {

                for ( let id in clients ) {

                    // physics
          
                    // velocity is 1.5 every frame
                    clients[id].y_velocity += 0.4; // gravity of the canvas
                    clients[id].x += clients[id].x_velocity;
                    clients[id].y += clients[id].y_velocity;
          
                    // friction -> slow gradually
          
                    clients[id].x_velocity *= 0.9;
                    clients[id].y_velocity *= 0.9;
          
                    // ground detection
          
                    if ( clients[id].y > 180 - 16 - 32 ) {
          
                        clients[id].jumping = false;
                        clients[id].y = 180 - 16 - 32;
          
                        // once the clients[id] hits the ground, your veclocity should stop
                        // instantly
                        clients[id].y_velocity = 0;
          
                    }
                }

                io.emit('emitServerResponse', clients)
            })

            socket.on('disconnect', () => {
                delete clients[socket.id];
                io.emit('clientsConnectedToServer', clients)
                console.log(clients)
            })

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
