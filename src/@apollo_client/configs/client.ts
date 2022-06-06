
import { ApolloClient, createHttpLink, } from "@apollo/client";
import cache from "./cache";

const httpLink = createHttpLink({
    uri: 'http://localhost:3000/graphql',
});



const client = new ApolloClient({
    cache,
    link: httpLink,
    credentials: 'include',
    
});



export default client