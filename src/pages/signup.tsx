
// next
import { NextPage } from "next"

// apollo client
import Navbar from "../components/Navbar/Navbar";

// components
import SignUp from "../components/SignUp/SignUp";



const SignIn: NextPage = () => {


    return (
      <div>
        <Navbar />
        <SignUp />
      </div>
    )
  
}
  
export default SignIn
