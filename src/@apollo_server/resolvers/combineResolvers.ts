
//import { users, createUser, signInUser, me } from "./userResolvers";

import { Token } from "graphql";
import { middleware } from "../middleware/context";
import User, { UserSchema } from "../MongoDB/models";
import { signIn, createUser, me } from './userResolvers'

const userDictionary: any = {}


const resolvers = {
    Query: {
        me
    }, 
    Mutation: {
        signIn,
        createUser
    },
    Token: {
        // This resolver fires in succession of the "signIn" or "createUser"
        data: async ( __: UserSchema, _: never, middleware: middleware ) => {
            return middleware.authenticate()
        }
    },
}


export default resolvers;