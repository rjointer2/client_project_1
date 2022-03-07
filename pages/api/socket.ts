
import { Server, ServerOptions, Socket } from 'socket.io';

const ioHandler = (req, res) => {
    if(!res.socket.server.io) {
        console.log(`starting the socket TCP`);

        const io = new Server(res.socket.server);

        let users = [];

        io.on('connection', socket => {
            socket.broadcast.emit('new user connected');

            users.push({ id: socket.id, data: null })
            console.log(users);
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