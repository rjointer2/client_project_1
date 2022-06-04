
import User, { UserSchema } from "../MongoDB/models"
import bcrypt from "bcrypt";
import { Model, Document, Types } from "mongoose";
import { middleware } from "../middleware/context";
import { ApolloError } from "apollo-server-express";


type Token = {
    message: string
}

export const signIn = async ( 
    _: never, 
    args: { username: string, password: string }, 
    middleware: middleware 
): Promise<Token> => {

    const user = await User.findOne({ username: args.username });

    if( !user ) return {
        message: "No User Found when queryed at log in..."
    }

    if( await bcrypt.compare( args.password, user.password ) ) {

        user.password = "";
        middleware.authorize(user)

        return {
            message: "User successfully logged in, user creditinals are being authenicated..."
        }
    }

    return {
        message: "Incorrected password used..."
    }

}

export const createUser = async (  
    _: never, args: { username: string, password: string, email: string }, middleware: middleware
): Promise<Token> => {

    args.password = await bcrypt.hash(args.password, 10)
    
    return await User.create(args).then( user => {
        middleware.authorize(user.id)
        return {
            message: "User Created Successfully...",
        }
    }).catch(( err: ApolloError ) => {

        let message = "Errors when creating User,"

        if( err.message.includes('password') ) message += " Password doesn't filfull requirements, ";
        if( err.message.includes('username') ) message += " Username already exist, ";
        if( err.message.includes('email') ) message += " Email has beem used already, ";

        return {
            message,
            data: null
        }
    })
}

export const me = async (  
    _: never, __: any, middleware: middleware
) => {

    middleware.authenticate()
    return {
        username: ""
    }



}
