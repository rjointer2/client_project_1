
// nextjs
import { useRouter } from 'next/router';

// react
import React, { useEffect, useState } from 'react'

// styles 
import { Alert, Button } from 'react-bootstrap';

// mongo
import { UserSchema } from '../../@apollo_server/MongoDB/models';

// socket
import { $$joinRoom, $$redirect, $$updatePlayerQueue, $$updateRooms, useSocket } from '../../hooks/useSocket'

// hooks
import { useCacheUser } from '../../hooks/useUser';

export default function PlayerQueue() {

    const [ clients, setClients ] = useState<{
        queue: any[]
        players: {}
    }>({
        queue: [],
        players: {}
    });

    const socket = useSocket();
    const { me, loading, error } = useCacheUser();

    const router = useRouter();
    const { id } = router.query;


    useEffect(() => { 
        if( id ) socket.emit($$joinRoom, id, me); 

        const redirect = () => {
            ( res: string ) => {
                router.replace(`/${res}`)
            }
        }

        const update = ( userData: UserSchema ) => {
            setClients( p => {
                return {
                    ...p,
                    queue: [ ...p.queue, userData ]
                }
            })
        }

        socket.on($$redirect, redirect);
        socket.on($$updatePlayerQueue, update);


        return () => {
            socket.off($$redirect, redirect)
            socket.off($$updatePlayerQueue, update);
        }

    }, [id]);


    

    console.log(clients);


  return (
    <div>
      <Alert variant='info' >
        Clients Connected - {clients.queue.length}
      </Alert>
       {
           clients.queue.map(( value, index ) => {
               return <div key={index} style={{ padding: '5px' }} >
                { value.username } <Button variant="primary"> Add Player </Button>
               </div>
           }) 
       }
    </div>
  )
}
