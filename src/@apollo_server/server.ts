
import next from 'next';

import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import MongoStore from 'connect-mongo';

import session from 'express-session';

import typeDefs from './typeDefs';
import resolvers from './resolvers/combineResolvers';
import context from './middleware/context'
import connectDb from './connectDB';
import database_configs from './configs';



const dev = process.env.NODE_ENV !== 'development';

const app = next({ dev });
const handle = app.getRequestHandler();

const _port = 3000;



const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context,
})


app.prepare().then( async () => {

    const expressLib = express();

    expressLib.get('*', ( req, res ) => {
        return handle(req, res)
    })

    expressLib.use(session({ 
        secret: process.env.SECRET as string, 
        resave: true,
        store: new MongoStore({ 
            mongoUrl: database_configs,
        }),
        name: "__tu7821_us",
        cookie: {
            maxAge: 2 * 60 * 60 * 1000
        },
        saveUninitialized: true
    }));

    connectDb()

    await apolloServer.start();
    apolloServer.applyMiddleware({ app: expressLib, })

    // Express instance passed is 
    expressLib.listen( _port, () => {
        console.log('server started!')
        console.log(apolloServer.graphqlPath)
    })
    
})
