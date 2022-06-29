
import { InMemoryCache } from "@apollo/client/cache";


const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                me: {
                    read( existing, options ) {
                        return existing
                    }
                }
            }
        }
    }
});




export default cache;