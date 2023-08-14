import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
//define schema 
const typeDefs = `
 type User {
    id:ID
    firstName:String
    lastName:String
    age:Int
    points:Float
    status:Boolean
  }
#Query
type Query {
    user:User
}

`;
//Resolovers: Biz logic or implementation of schema
const resolvers = {
    //Query
    Query: {
        user() {
            return {
                id: 1,
                firstName: 'Subramanian',
                lastName: 'Murugan',
                age: 12,
                points: 100.89,
                status: true
            };
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
