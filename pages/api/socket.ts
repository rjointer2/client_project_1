
import { Server, ServerOptions, } from 'socket.io';
import { NextApiRequest, NextApiResponse } from 'next';


const ioHandler = (req: NextApiRequest, res: any) => {


    if(!res.socket.server.io) {
        console.log(`starting the socket TCP`);

        const io = new Server(res.socket.server);

        type data = {id: string, data: null }
        let users: Array<data> = [];

        io.on('connection', socket => {
            socket.broadcast.emit('new user connected');

            users.push({ id: socket.id, data: null })
            console.log(users);
            console.log(users.slice(-1)[0])
            socket.emit('assignClient', users.slice(-1)[0])
            socket.on('assigned', user => {
                console.log(user)
            })
            io.emit('clientsOnline', users);

           


            socket.on('disconnect', () => {
                users = users.filter(( user ) => user.id !== socket.id)
                io.emit('clientsOnline', users)
                console.log(`after disconnection: ${users}`)
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