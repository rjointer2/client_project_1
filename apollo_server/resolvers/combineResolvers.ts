
import { users, createUser } from "./userResolvers";

const resolvers = {
    Query: {
        users
    },
    Mutation: {
        createUser
    }
}

export default resolvers;