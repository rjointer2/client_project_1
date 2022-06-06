
import { signIn, createUser, me } from './userResolvers'


const resolvers = {
    Query: {
        me
    }, 
    Mutation: {
        signIn,
        createUser
    },
}


export default resolvers;