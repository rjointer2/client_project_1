
import { ApolloClient, ApolloLink, createHttpLink, RequestHandler, } from "@apollo/client";
import { setContext } from "apollo-link-context";
import cache from "./cache";

const httpLink = createHttpLink({
    uri: 'http://localhost:1321/graphql',
});

const authLink = setContext((_, { headers }) => {
    const token = ""
    console.log(client.cache.data.data)
    return {
      headers: {
        ...headers,
        "authorization": ""
      },
    };
  });



const client = new ApolloClient({
    cache,
    link: authLink.concat( httpLink ) as unknown as ApolloLink
});



export default client