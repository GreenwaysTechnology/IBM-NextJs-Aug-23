import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
//define schema 
const typeDefs = `
 #Simple Query
 """
 This is hello api which returns hello world in 
 in the string format.
"""
 type Query {
    hello:String
 }
`;
//Resolovers: Biz logic or implementation of schema
const resolvers = {
    //Query
    Query: {
        //hello implementation
        hello() {
            return 'Hello GraphQL!';
        }
    }
};
//Deploy into ApollServer:
const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers
});
//start web container
const { url } = await startStandaloneServer(server, {
    listen: {
        port: 4000
    }
});
console.log(`Apollo Server is Ready at ${url}`);
