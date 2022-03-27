
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
                console.log(clients)
                io.emit('currentClients', clients)
            });

            socket.on('requestToUpdateClient', () => {
                for(let id in clients) {
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
                io.emit('updateClient', clients)
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
