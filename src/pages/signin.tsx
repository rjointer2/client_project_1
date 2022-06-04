
// next
import { NextPage } from "next"
import Link from "next/link"

// apollo client
import { gql, useMutation, useQuery } from '@apollo/client';
import { SIGNIN, ME_DATA } from "../@apollo_client/mutations/userMutation";
import { useEffect } from "react";
import { me } from "../@apollo_client/querys/userQuery";
import client from "../@apollo_client/configs/client";
import cache from "../@apollo_client/configs/cache";
import Navbar from "../components/Navbar/Navbar";



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
      console.log(i.data)
    })()

  }, [])

    return (
      <div>
        <Navbar />
      </div>
    )
  
}
  
export default SignIn


/* 
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

*/