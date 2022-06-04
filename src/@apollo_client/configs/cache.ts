
import { InMemoryCache } from "@apollo/client/cache";
import { makeVar } from "@apollo/client";
import { graphql } from "graphql";

export const bearToken = makeVar('');

const cache = new InMemoryCache({
    typePolicies: {
        Token: {
            fields: {
                data: {
                    read( existing ) {
                        existing.token === "" ?
                        bearToken("") : bearToken(existing.token)
                    }
                }
            }
        }
    }
});




export default cache;