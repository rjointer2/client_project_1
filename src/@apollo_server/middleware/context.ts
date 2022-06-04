
import jwt, { Secret } from "jsonwebtoken";
import dotenv from "dotenv";
import http, { IncomingMessage } from "http";
import express, { Express, NextFunction } from 'express';
import dayjs from 'dayjs';
import { UserSchema } from "../MongoDB/models";


type ID = string

export interface middleware {
    authorize: ( user: UserSchema ) => void
    authenticate: () => UserSchema | null
    //endSession: () => void
}

dotenv.config();

const secret = process.env.SECRET as Secret
const expiration = '2h'


export default function middleware(
    { req , res } 
    :
    { req: express.Request & { session: { token: string  } }, res: express.Response }
): middleware { 

    return {
        authorize: ( user: UserSchema ) => {

            const token = jwt.sign({ data: user }, secret)
            req.session.token = token
            
        },
        authenticate: () => {

            const token = req.session.token;

            if( !token ) return null;
            const decodedStep1 = token.split(' ').pop();

            if ( !decodedStep1 ) return null;
            const decodedStep2 = decodedStep1.trim();
            
            const { data } = jwt.verify(decodedStep2, secret) as { data: UserSchema } ;
            
            console.log(data)
            
            return data

        }
    }
}
