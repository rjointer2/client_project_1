
import { gql } from "apollo-server-express";

const typeDefs = gql`


    type AuthResponse {
        message: String 
        succesful: Boolean
    }

    type User {
        username: String
        password: String
        email: String
        rank: Int
    }

    type Query {
        me: User
    }

    type Mutation {
        signIn ( username: String!, password: String! ): AuthResponse
        createUser ( username: String!, password: String!, email: String! ): AuthResponse
    }

`;

export default typeDefs;
