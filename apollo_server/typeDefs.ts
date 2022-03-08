
import { gql } from "apollo-server-micro";

const typeDefs = gql`


    type Query {
       hello: String
    }

    type Mutation {
        world: String
    }

`;

export default typeDefs;