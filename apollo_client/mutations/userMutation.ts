
import { gql } from "@apollo/client";


export const SIGNIN = gql`
    mutation signIn ($username: String!, $password: String!) {
        signIn (username: $username, password: $password) {
            message
            data {
                token
                username
            }
        }
    }
`;