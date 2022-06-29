
// next
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router'

// react 
import React, { ChangeEvent, useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';


// components
import ChatBox from '../../components/ChatBox/ChatBox';
import ChatInput from '../../components/ChatInput/ChatInput';
import Navbar from '../../components/Navbar/Navbar';
import PlayerQueue from '../../components/PlayerQueue/PlayerQueue';

const ClientSideCanvasComponent = dynamic(() => 
    import('../../components/Canvas/Canvas'),
    { ssr: false }
)

// hooks
import { $$disconnectFromRoom, $$redirect, $$updateRooms, useSocket } from '../../hooks/useSocket';


type FormControlEvent = any

export default function Room() {

    return(
        <div>
            <Navbar />

            <div > 
                <ClientSideCanvasComponent />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', }} >
                <div>
                    <ChatBox />
                    <ChatInput />
                </div>
                <PlayerQueue />
            </div>

        </div>
    )
}
