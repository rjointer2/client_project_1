
import { ApolloClient, ApolloLink, createHttpLink, } from "@apollo/client";
import { createPersistedQueryLink } from "@apollo/client/link/persisted-queries"
import { setContext } from "apollo-link-context";
import cache from "./cache";
import { sha256 } from 'crypto-hash'

const persistedQueriesLink = createPersistedQueryLink({ sha256 });


const httpLink = createHttpLink({
    uri: 'http://localhost:3000/graphql',
});


const client = new ApolloClient({
    cache,
    link: persistedQueriesLink.concat(httpLink),
    credentials: 'include',
    
});



export default client