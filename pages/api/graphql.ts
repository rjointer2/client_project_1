
import { ApolloServer, gql } from "apollo-server-micro";

import typeDefs from "../../apollo_server/typeDefs";
import resolvers from "../../apollo_server/resolvers/combineResolvers";
import { NextApiRequest, NextApiResponse } from "next";

import Cors from 'micro-cors';

const cors = Cors();

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const startServer = server.start();

export default cors(async function apolloHandler( req: Request, res: Response ) {
    

    if( req.method === 'OPTIONS' ) {
        res.end();
        return false
    }

    await startServer;
    await server.createHandler({ 
        path: '/api/graphql'
    })( req, res )
});

export const config = {
    api: {
        bodyParser: false
    }
} 

