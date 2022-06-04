
import { NextPage } from "next"
import Link from "next/link"
import Navbar from "../components/Navbar/Navbar"
import { FormContainer } from "../styled_componenets/FormStyles"


const SignUp: NextPage = () => {

    return (
      <div>
        <Navbar />
        <FormContainer>
        <div className="Group">
              <label>Username</label>
              <input />
          </div>
          <div className="Group">
              <label>Password</label>
              <input />
          </div>
          <div className="Button">
            <button>
             Submit
            </button> 
          </div>
        </FormContainer>
      </div>
    )
  
}
  
export default SignUp