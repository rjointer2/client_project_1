
// react
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import React, { ChangeEvent, Dispatch, useState } from 'react'

// styles
import { Button, Form } from 'react-bootstrap'
import { ME } from '../../@apollo_client/querys/userQuery';
import { $$createRoom, $$joinRoom, $$roomCreated, useSocket } from '../../hooks/useSocket'
import { useCacheUser } from '../../hooks/useUser';

type FormControlEvent = any

export default function FindOrCreateRoom() {

    const socket = useSocket();
    const router = useRouter();

    const { me, loading, error } = useCacheUser();


    const [ localState, setLocalState ] = useState({
      roomIsInValid: false, roomIsValid: false,
      scoreIsInValid: false, scoreIsValid: false,
      roomName: "", message: ''
    });
  
  
    const submitHandler = ( e: ChangeEvent<FormControlEvent> ) => {
      e.preventDefault()

      if( me === null ) {
        setLocalState( p => {
          return {
            ...p,
            message: 'No user is logged in, you must be logged to join or create a room!'
          }
        })
        return;
      }

      socket.emit( $$createRoom, localState.roomName );

      const handleRequestFromSocketServer = ( isRoomCreated: boolean ) => {
        if( isRoomCreated ) {
            router.replace(`/room/${localState.roomName}`)
        }
        setLocalState( s => {
            return {
                ...s,
            message: 'Room name taken already...'
            }
        })
      }

      socket.on( $$roomCreated, handleRequestFromSocketServer);

      return () => {
        socket.off($$roomCreated, handleRequestFromSocketServer)
      }
      
    }
  
    const eventHandler = ( e: ChangeEvent<FormControlEvent> ) => {
      const { name, value } = e.currentTarget;
       setLocalState( s => { return { ...s, [name]: value, scoreIsInValid: false, message: '' } });
    }
    
    return (
      <div style={{ paddingTop: '30vh' }} >
        <Form onSubmit={submitHandler}>
  
            <Form.Group className="mb-3" >
                <Form.Label>Create Room Name</Form.Label>
                <Form.Control type="name" placeholder="Please Enter Email" 
                    isInvalid={localState.roomIsInValid}
                    isValid={localState.roomIsValid}
                    name="roomName"
                    onChange={(e) => eventHandler(e as ChangeEvent<FormControlEvent>)}
                />
            </Form.Group>
  
  
  
            <div style={{ display: 'flex', flexDirection: "column" }} >
                <br/>
                <Button variant="primary" type="submit" style={{ display: 'flex', justifyContent: 'center' }} >
                    Create Room
                </Button>
                <br/> <br/>
  
                
                <Form.Text className="text-muted" style={{ color: 'red' }} >
                    { localState.message ? localState.message : null }
                </Form.Text>
            </div>
        </Form>
      </div>
    )
}
