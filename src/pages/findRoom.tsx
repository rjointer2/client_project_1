
// react
import React, { ChangeEvent, useState } from 'react'

// styles
import { Button, Form } from 'react-bootstrap';

// hooks
import { $$joinRoom, useSocket } from '../hooks/useSocket';

type FormControlEvent = any

type localState = {
    roomIsInValid: boolean, roomIsValid: boolean,
    scoreIsInValid: boolean, scoreIsValid: boolean,
    roomName: string,
}

export default function FindRoom() {


  const [ localState, setLocalState ] = useState<localState>({
    roomIsInValid: false, roomIsValid: false,
    scoreIsInValid: false, scoreIsValid: false,
    roomName: "",
  });


  const submitHandler = ( e: ChangeEvent<FormControlEvent> ) => {
    e.preventDefault()
    window.location.replace(`/room/${localState.roomName}`)
  }

  const eventHandler = ( e: ChangeEvent<FormControlEvent> ) => {
    const { name, value } = e.currentTarget;

    if( name == "scoreLimit" && isNaN(parseInt(value)) ) {
      console.log(value)
      
      setLocalState( s => {
        return {
          ...s,
          scoreIsInValid: true
        }
      })

      return;
    }

    setLocalState( s => { return { ...s, [name]: value, scoreIsInValid: false } });

  }

  return (
    <div style={{ paddingTop: '30vh' }} >
      <Form onSubmit={submitHandler}>

          <Form.Group className="mb-3" >
              <Form.Label>Find a Room Name</Form.Label>
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

              </Form.Text>
          </div>
      </Form>
    </div>
  )
}
