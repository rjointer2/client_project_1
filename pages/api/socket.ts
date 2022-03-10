
import { Server, ServerOptions, } from 'socket.io';
import { NextApiRequest, NextApiResponse } from 'next';


const ioHandler = (req: NextApiRequest, res: any) => {


    if(!res.socket.server.io) {
        console.log(`starting the socket TCP`);

        const io = new Server(res.socket.server);

        type data = {id: string, data: null }
        let users: Array<data> = [];

        io.on('connection', socket => {
           socket.on('control', e => {
               console.log(e)
               socket.emit('emitControl', e)
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