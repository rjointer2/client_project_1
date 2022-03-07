import { useEffect, useState } from "react";

import io from 'socket.io-client';

export const useSocket = () => {

    const [users, setUsers] = useState<Array<string>>([])

    useEffect(() => {
        fetch('./api/socket').finally(() => {
          const socket = io();
    
          socket.on('clientsOnline', (clients) => {
            setUsers(clients);
          });
        })
    
    }, []);

    return users
    

}