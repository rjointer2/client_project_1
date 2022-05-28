
import { NextPage } from "next"
import Link from "next/link"


const SignUp: NextPage = () => {

    return (
      <div>
        <form>
          <label>Username</label>
          <input value={""} name="username" onChange={() => {}}/>
          <label>Password</label>
          <input value={""} name="password" onChange={() => {}} />
          <Link href="/signin">
            <a>Have a Account? Sign In Now!</a>
          </Link>
        </form>
      </div>
    )
  
}
  
export default SignUp