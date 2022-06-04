
import { gql } from "apollo-server-express";

const typeDefs = gql`

    type Token {
        message: String
        data: User
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
        signIn ( username: String!, password: String! ): Token
        createUser ( username: String!, password: String!, email: String! ): Token
    }

`;

export default typeDefs;
