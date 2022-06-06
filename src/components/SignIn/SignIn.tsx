
// react
import { ApolloError, useMutation } from '@apollo/client';
import React, { ChangeEvent, useEffect, useState } from 'react'

// styles
import { Button, Form } from 'react-bootstrap';


// apollo client
import { SIGNIN } from '../../@apollo_client/mutations/userMutation';

type FormControlEvent = any


export default function SignIn() {

    const [ validation, setValidation ] = useState({
        isInValid: false, isValid: false
    })

    const [ state, setState ] = useState<{ username?: string, password?: string }>({});

    const eventHandler = ( e: ChangeEvent<FormControlEvent> ) => {
        // this function will fire twice on the browser on the dom load
        // if the user has the password fill in the input fields
        const { name, value } = e.currentTarget;
        setState( s => { return { ...s, [name]: value } });
    }

    const [ signIn ] = useMutation<{ message: string }>(SIGNIN);

    const submitHandler = async ( e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault();

        try {
            await signIn({ variables: {
                "username": state.username,
                "password": state.password,
            }});
            setValidation( s => {
                return {
                    ...s,
                    isInValid: false,
                    isValid: true
                }
            })
        } catch( err ) {
            let error =  err as ApolloError
            console.log(error.message)
            setValidation( s => {
                return {
                    ...s,
                    isInValid: true,
                    isValid: false
                }
            })
        }
    }


    return (
        <div style={{ paddingTop: '30vh' }} >

            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="username"  >
                <Form.Label>Username</Form.Label>
                <Form.Control type="name" placeholder="Please Enter Email" 
                    isInvalid={validation.isInValid}
                    isValid={validation.isValid}
                    name="username"
                    onChange={(e) => eventHandler(e as ChangeEvent<FormControlEvent>)}
                />
                <Form.Text className="text-muted">
                
                    
                </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" 
                    isInvalid={validation.isInValid}
                    isValid={validation.isValid}
                    name="password"
                    onChange={(e) => eventHandler(e as ChangeEvent<FormControlEvent>)}
                />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </div>
    )
}
