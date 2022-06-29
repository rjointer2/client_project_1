
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { UserSchema } from '../../@apollo_server/MongoDB/models';

import { $$joinRoom, $$redirect, $$updatePlayerQueue, $$updateRooms, useSocket } from '../../hooks/useSocket'
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
       {
           clients.queue.map(( value, index ) => {
               return <div key={index}>
                { value.username }
               </div>
           })
       }
    </div>
  )
}
