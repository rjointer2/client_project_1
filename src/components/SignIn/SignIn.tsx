
// react
import { ApolloError, useMutation } from '@apollo/client';
import React, { ChangeEvent, useEffect, useReducer, useState } from 'react'

// styles
import { Button, Form } from 'react-bootstrap';


// apollo client
import { SIGNIN } from '../../@apollo_client/mutations/userMutation';
import Spinner from '../Spinner/Spinner';

type FormControlEvent = any;



export default function SignIn() {


    const [ validation, setValidation ] = useState({
        isInValid: false, isValid: false,
    })

    const [ form, setForm ] = useState<{ username?: string, password?: string }>({});

    const eventHandler = ( e: ChangeEvent<FormControlEvent> ) => {
        // this function will fire twice on the browser on the dom load
        // if the user has the password fill in the input fields
        const { name, value } = e.currentTarget;
        setForm( s => { return { ...s, [name]: value } });
    }

    const [ signIn, { data, loading, error } ] = useMutation<{ signIn: { message: string } }>(SIGNIN);


    const submitHandler = async ( e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault();

        try {
            await signIn({ variables: {
                "username": form.username,
                "password": form.password,
            }});

            setValidation( s => {
                return { ...s, isInValid: false, isValid: true }
            });

            window.location.replace('/')

        } catch {
            setValidation( s => {
                return { ...s, isInValid: true, isValid: false }
            });
        }
    };

    useEffect(() => {
        if( validation.isInValid === false ) return
        setValidation( s => {
            return { ...s, isInValid: false, isValid: false }
        })
    }, [form])


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

                <div style={{ display: 'flex', flexDirection: "column" }} >
                    <br/>
                    <Button variant="primary" type="submit" style={{ display: 'flex', justifyContent: 'center' }} >
                        { loading ? <Spinner /> : 'Submit' }
                    </Button>
                    <br/>
                    <Form.Text className="text-muted" style={{ color: 'red' }} >
                        { error ? error.message : '' }
                        { data ? data.signIn.message : '' }
                    </Form.Text>
                </div>
            </Form>
        </div>
    )
}
