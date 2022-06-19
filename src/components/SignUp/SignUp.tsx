
// react
import { useMutation } from '@apollo/client';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';

// styles
import { Button, Form } from 'react-bootstrap';

// apollo client
import { SIGNUP } from '../../@apollo_client/mutations/userMutation';

// components
import Spinner from '../Spinner/Spinner';

type FormControlEvent = any;

export default function SignUp() {

  const executedRender = useRef(0);

  useEffect(() => {
    executedRender.current++
    console.log(executedRender.current)
  })

  const [ validation, setValidation ] = useState({ isInValid: false, isValid: false });

  const [ form, setForm ] = useState<{ 
    username: string, password: string, confirmPassword: string, email: string 
  }>({
    username: "", password: "", confirmPassword: "", email: "" 
  });

  const [ createUser, { data, loading, error } ] = useMutation(SIGNUP)

  const eventHandler = ( e: ChangeEvent<FormControlEvent> ) => {
    // this function will fire twice on the browser on the dom load
    // if the user has the password fill in the input fields
    const { name, value } = e.currentTarget;
      setForm( s => { return { ...s, [name]: value } });
      if( validation.isInValid === false ) return
        setValidation( s => {
            return { ...s, isInValid: false, isValid: false }
      })
  }

  const submitHandler = async ( e: React.FormEvent<HTMLFormElement> ) => {

    e.preventDefault();

    try {
      await createUser({ variables: {
        "username": form.username,
        "password": form.password,
        "confirmPassword": form.confirmPassword,
        "email": form.email,
      } });

      window.location.replace('/')
    } catch(err) {
      setValidation( s => {
        return { ...s, isInValid: true, isValid: false }
      });

    }

  }

  return (
    <Form onSubmit={submitHandler} >
        <Form.Group className="mb-3" controlId="username"  >
          <Form.Label>Username</Form.Label>
          <Form.Control type="name" placeholder="Please Enter Email"
            name="username"
            onChange={eventHandler}
            isInvalid={validation.isInValid}
            isValid={validation.isValid}
          />
          <Form.Text className="text-muted">
            
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" 
            name="password"
            onChange={eventHandler}
            isInvalid={validation.isInValid}
            isValid={validation.isValid}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="confirmpassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" 
            name="confirmPassword"
            onChange={eventHandler}
            isInvalid={validation.isInValid}
            isValid={validation.isValid}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" 
            name="email"
            onChange={eventHandler}
            isInvalid={validation.isInValid}
            isValid={validation.isValid}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        </Form.Group>

        <div style={{ display: 'flex', flexDirection: "column" }} >
            <br/>
            <Button 
              variant="primary" type="submit" 
              disabled={validation.isInValid}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
                { loading ? <Spinner /> : 'Submit' }
            </Button>
            <br/>
            <Form.Text className="text-muted" style={{ color: 'red' }} >
                { error ? error.message : '' }
                { data ? data.createUser.message : '' }
            </Form.Text>
        </div>
      </Form>
  )
}
