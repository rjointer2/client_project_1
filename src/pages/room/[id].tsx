
// next
import { useRouter } from 'next/router'

// react 
import React, { ChangeEvent, useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import Canvas from '../../components/Canvas/Canvas';
import ChatBox from '../../components/ChatBox/ChatBox';
import ChatInput from '../../components/ChatInput/ChatInput';
import Navbar from '../../components/Navbar/Navbar';

// hooks
import { $$disconnectFromRoom, $$redirect, $$updateRooms, useSocket } from '../../hooks/useSocket';


type FormControlEvent = any

export default function Room() {

    const socket = useSocket();
    const router = useRouter();
    const { id } = router.query;


    useEffect(() => { 
        if( id ) socket.emit('joinRoom', id); 
        socket.on($$redirect, ( res: string ) => {
            router.replace(`/${res}`)
        })
    }, [id]);

    

    

    return(
        <div>
            <Navbar />
            <div style={{ 
            display: 'flex', alignItems: 'center', flexDirection: 'column',
            marginTop: '2.5vh',
        }} >
            <Canvas />
            <ChatBox />
            <ChatInput />
        </div>
        </div>
    )
}
