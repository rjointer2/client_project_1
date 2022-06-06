
// react 
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react"

// apollo client
import { useMutation } from "@apollo/client"
import { NextPage } from "next"
import { SIGNIN } from "../@apollo_client/mutations/userMutation"

// components
import Navbar from "../components/Navbar/Navbar"

// next
import Link from "next/link"
import SignIn from "../components/SignIn/SignIn"




const SignUp: NextPage = () => {

  useEffect(() => {
    console.log('rerendered!')
  })


  return (
    <div>
      <Navbar />
      <SignIn />
    </div>
  )
  
}
  
export default SignUp

