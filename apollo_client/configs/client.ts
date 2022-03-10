
import { ApolloClient, createHttpLink } from "@apollo/client";
import cache from "./cache";

const client = new ApolloClient({
    cache,
    uri: 'http://localhost:3000/api/graphql'
});

export default client