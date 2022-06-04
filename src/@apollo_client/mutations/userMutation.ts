
import { gql } from "@apollo/client";

export const ME_DATA = gql`
    fragment data on User {
        username
        email
        rank
    }
`;


export const SIGNIN = gql`
    ${ME_DATA}
    mutation signIn ($username: String!, $password: String!) {
        signIn (username: $username, password: $password) {
            message
            data {
                ...data
            }
        }
    }
`;