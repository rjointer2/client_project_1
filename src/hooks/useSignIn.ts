
import { useMutation } from "@apollo/client";
import { useEffect, useRef } from "react";
import { SIGNIN } from "../@apollo_client/mutations/userMutation";

export default function useSignIn( e: Event ) {

    e.preventDefault()

    // This is for development purposes, to avoid unnecessary
    // misfires and extra request on dev env
    const exceutedSideEffect = useRef( false );

    const [ signIn ] = useMutation(SIGNIN);

    useEffect(() => {
        
        if( exceutedSideEffect.current ) return;

        ( async ( ) => {

            const i = await signIn({
                variables: {
                  "username": "test1",
                  "password": "test1",
                  "email": "test1@gmail.com",
          
                }
              })
            console.log(i.data)

        })();


        exceutedSideEffect.current = true;

    }, [])

}