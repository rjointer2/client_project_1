
import { NextPage } from "next"
import Link from "next/link"

import { gql, useMutation, useQuery } from '@apollo/client';
import { SIGNIN } from "../apollo_client/mutations/userMutation";
import { useEffect } from "react";
import { me } from "../apollo_client/querys/userQuery";
import client from "../apollo_client/configs/client";



const SignIn: NextPage = () => {

  const [ signIn ] = useMutation(SIGNIN);


  

  useEffect(() => {
    ( async () => {
      const i = await signIn({
        variables: {
          "username": "test1",
          "password": "test1",
          "email": "test1@gmail.com",
  
        }
      })
      client.writeQuery({
        "query": gql`
        mutation signIn ($username: String!, $password: String!) {
            signIn (username: $username, password: $password) {
                message
                data {
                    token
                    username
                }
            }
        }
    `,
        data: {
          signIn: {
            message: '',
            data: {
              token: i.data.signIn.data.token,
              username: ''
            }
          }
        }
      })
      console.log(i.data.signIn.data.token)
    })()

  }, [])

    return (
      <div>
        <form>
          <label>Username</label>
          <input value={""} name="username" onChange={() => {}} />
          <label>Password</label>
          <input value={""} name="password" onChange={() => {}} />
          <label>Confirm Password</label>
          <input value={""} name="confirmpassword" onChange={() => {}} />
          <label>Email</label>
          <input value={""} name="password" onChange={() => {}} />
          <Link href="/signup">
            <a>Don't Have a Account? Sign Up Today!</a>
          </Link>
        </form>
      </div>
    )
  
}
  
export default SignIn