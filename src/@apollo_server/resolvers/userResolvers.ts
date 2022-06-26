
import User, { UserSchema } from "../MongoDB/models"
import bcrypt from "bcrypt";
import { Model, Document, Types } from "mongoose";
import { middleware } from "../middleware/context";
import { ApolloError } from "apollo-server-express";


type AuthResponse = {
    message: string,
}

export const signIn = async ( 
    _: never, 
    args: { username: string, password: string }, 
    middleware: middleware 
): Promise<AuthResponse> => {

    const user = await User.findOne({ username: args.username });

    let message = "Failed To Sign In! :[";

    if( !user ) {
        throw new ApolloError(`No User was found when queryed for ${args.username}...`)
    }
    

    if( !await bcrypt.compare( args.password, user.password ) ) {
        throw new ApolloError('Incorrect Password Used When Signing In...')
    }

    user.password = "";
    middleware.authorize(user)
    message = "Sign In Successfully!";

    return {
        message
    }

}

type signUpArgs = { 
    [key: string]: string
    username: string, password: string, confirmPassword: string, email: string 
}

export const createUser = async (  
    _: never, args: signUpArgs, middleware: middleware
) => {

    for ( let input in args ) {
        if( args[input] === '' ) throw new ApolloError(`All fields aren't fill out, please fill out fields to create a account`);
    }

    if( args.password !== args.confirmPassword ) throw new ApolloError('The passwords entered did not match, please try again...');

    if( args.username.length > 5 ) throw new ApolloError('Username must be at least 6 characters long');

    try {

        const _hashPasswored = await bcrypt.hash( args.password, 12 );
        args.password = _hashPasswored

        const user = await User.create(args);
        middleware.authorize(user)

        return {
            message: 'Successfully Register Account!'
        }
    } catch ( err ) {

        console.log(err)

        if( !err ) throw new ApolloError('no error thrown, bad server handle made..')

        if( !(typeof err === 'object') ) throw new ApolloError('unknown error thrown, server failed to evaluate issue...')

        if( err.hasOwnProperty('message') ) {
            let error = err as { message: string }

            if( error.message.includes("username_1") ) throw new ApolloError(`Username: ${args.username} has been used already...`)
            if( error.message.includes("email_1") ) throw new ApolloError(`Email: ${args.email} has been used already...`)

            throw new ApolloError(error.message)
        }

    }

}

export const me = async (  
    _: never, __: any, middleware: middleware
) => {

    const user = middleware.authenticate()
    return user



}
