

// next
import { useRouter } from 'next/router'

// react 
import React, { ChangeEvent, useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';

// hooks
import { $$sendChat, $$updateRooms, useSocket } from '../../hooks/useSocket';


type FormControlEvent = any

export default function ChatInput() {

    const socket = useSocket();
    const router = useRouter()
    const { id } = router.query;

    const [ message, setMessage ] = useState('')
    


    useEffect(() => {

        socket.on($$sendChat, ( res: any ) => {
            console.log(res)
        })
        
    }, [])

    const eventHandler = ( e: ChangeEvent<FormControlEvent> ) => {
        const { name, value } = e.currentTarget;
        setMessage(value);
    }

    const submitHandler = ( e: ChangeEvent<FormControlEvent> ) => {
        e.preventDefault();
        socket.emit<typeof $$updateRooms>($$updateRooms, id, $$sendChat, message)
    }
    

    return (
        <div>
            <div>
                <Form onSubmit={submitHandler} style={{ padding: '20px' }} >
        
                    <Form.Group className="mb-3" >
                        <Form.Label>Send Message</Form.Label>
                        <Form.Control type="name" placeholder="Say Something!" 

                            name="roomName"
                            onChange={(e) => eventHandler(e as ChangeEvent<FormControlEvent>)}
                        />
                    </Form.Group>
        
        
        
                    <div style={{ display: 'flex', flexDirection: "column" }} >
                        <br/>
                        <Button variant="primary" type="submit" style={{ display: 'flex', justifyContent: 'center' }} >
                            Create Room
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}
