
import { ApolloServer } from "apollo-server-micro";

import typeDefs from "../../apollo_server/typeDefs";
import resolvers from "../../apollo_server/resolvers/combineResolvers";

import Cors from 'micro-cors';

import { ServerResponse } from "http";
import { MicroRequest } from "apollo-server-micro/dist/types";

import { connectDb } from "../../apollo_server/connectDB";

const cors = Cors();

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const startServer = server.start();

export default cors(async function( req: MicroRequest, res: ServerResponse ) {

    if( req.method === 'OPTIONS' ) {
        res.end();
    }

    connectDb()

    await startServer;
    await server.createHandler({ 
        path: '/api/graphql'
    })( req, res );



});


export const config = {
    api: {
        bodyParser: false
    }
} 

