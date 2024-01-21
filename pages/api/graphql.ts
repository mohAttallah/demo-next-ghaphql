import { ApolloServer } from "apollo-server-micro";

// Import the types for  API request and response objects.
import type { NextApiRequest, NextApiResponse } from 'next';


// Create an instance of ApolloServer with an empty configuration object

const server = new ApolloServer({

});

export const config = {
    api: {
        bodyParser: false // Disable automatic body parsing 
    }
};

const startServer = server.start();


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // Wait for the Apollo Server to start.

    await startServer;
    // Create an Apollo Server handler function with a specified path.
    await server.createHandler({
        path: '/api/graphql', // The path where the GraphQL API will be available
    })(req, res);
}