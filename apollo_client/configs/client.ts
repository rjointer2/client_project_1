
import { ApolloClient, createHttpLink } from "@apollo/client";
import cache from "./cache";

const http_link = createHttpLink({
    uri: process.env.NODE_ENV === 'development' ? 
    'http://localhost:8080/graphql' : 'actual server'
});

const client = new ApolloClient({
    cache,
    link: http_link
});

export default client