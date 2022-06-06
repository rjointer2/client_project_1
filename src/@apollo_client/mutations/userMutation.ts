
import { gql } from "@apollo/client";

export const ME_DATA = gql`
    fragment data on User {
        username
        email
        rank
    }
`;


export const SIGNIN = gql`
    mutation signIn($username: String!, $password: String!) {
        signIn (username: $username, password: $password) {
            message
        }
    }
`;

export const SIGNUP = gql`
    mutation signUp($username: String!, $password: String!, $email: String!) {
        createUser(username: $username, password: $password, email: $email) {
            message
        }
    }
`;