import { useQuery } from '@apollo/client';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';

import io from 'socket.io-client';
import { USERS } from '../apollo_client/querys/users';

const Home: NextPage = () => {

  const { data, error } = useQuery(USERS)

  console.log(`showing data...`,  data ? data : error )

  const [users, setUsers] = useState<Array<string>>([])

  useEffect(() => {
    fetch('./api/socket').finally(() => {
      const socket = io();

      socket.on('clientsOnline', (clients) => {
        setUsers( clients );
      });

      socket.on('assignClient', user => {
        user.data = {
          name: 'username'
        }
        console.log(user)
        socket.emit('assigned', user)
      })

      
    })
  }, []);

  

  return <div>number of clients {users.length}</div>
}

export default Home
