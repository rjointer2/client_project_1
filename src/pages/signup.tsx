
// next
import { NextPage } from "next"

// apollo client
import Navbar from "../components/Navbar/Navbar";
import { Button, Form } from "react-bootstrap";



const SignIn: NextPage = () => {

  //const { submitHandler } = useUserSessionHook('signUp');


    return (
      <div>
        <Navbar />
        <Form onSubmit={() => {}} >
        <Form.Group className="mb-3" controlId="username"  >
          <Form.Label>Username</Form.Label>
          <Form.Control type="name" placeholder="Please Enter Email" />
          <Form.Text className="text-muted">
            
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="confirmpassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        </Form.Group>

        <Button variant="primary">Submit</Button>
      </Form>
      </div>
    )
  
}
  
export default SignIn
