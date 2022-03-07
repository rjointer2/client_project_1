import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';

import io from 'socket.io-client';

const Home: NextPage = () => {

  const [users, setUsers] = useState<Array<string>>([])

  useEffect(() => {
    fetch('./api/socket').finally(() => {
      const socket = io();

      socket.on('clientsOnline', (clients) => {
        console.log(clients)
        setUsers( clients );
      });

      return () => socket
    })
  }, []);

  

  return <div>number of clients {users.length}</div>
}

export default Home
