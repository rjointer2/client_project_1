
import { gql } from "apollo-server-micro";

const typeDefs = gql`

    type User {
        username: String
        password: String
        email: String
        rank: Int
    }


    type Query {
       users: [User]
    }

    type Mutation {
        createUser ( username: String!, password: String!, email: String! ): User
    }

`;

export default typeDefs;