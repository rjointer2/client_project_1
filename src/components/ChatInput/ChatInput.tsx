

// next
import { FragmentsOnCompositeTypesRule } from 'graphql';
import { useRouter } from 'next/router'

// react 
import React, { ChangeEvent, useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';

// hooks
import { $$sendChat, $$updateRooms, useSocket } from '../../hooks/useSocket';
import { useCacheUser } from '../../hooks/useUser';


type FormControlEvent = any

export default function ChatInput() {

    const socket = useSocket();
    const router = useRouter();
    const { me, loading, error } = useCacheUser()
    const { id } = router.query;

    console.log(me)
    

    const [ message, setMessage ] = useState({})
    

    const eventHandler = ( e: ChangeEvent<FormControlEvent> ) => {
        const { name, value } = e.currentTarget;
        setMessage( p => {
            return {
                ...p,
                [name]: value
            }
        });
    }

    const submitHandler = ( e: ChangeEvent<FormControlEvent> ) => {



        e.preventDefault();
        console.log(message)
        socket.emit<typeof $$updateRooms>($$updateRooms, id, $$sendChat, message)
    }
    

    return (
        <div>
            <div>
                <Form onSubmit={submitHandler} style={{ padding: '20px' }} >
        
                    <Form.Group className="mb-3" >
                        <Form.Label>Send Message</Form.Label>
                        <Form.Control type="name" placeholder="Say Something!" 

                            name={ me ? me.username : 'User_Not_Mounted' }
                            onChange={(e) => eventHandler(e as ChangeEvent<FormControlEvent>)}
                        />
                    </Form.Group>
        
        
        
                    <div style={{ display: 'flex', flexDirection: "column" }} >
                        <br/>
                        <Button variant="primary" type="submit" style={{ display: 'flex', justifyContent: 'center' }} >
                            Send Message
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}
