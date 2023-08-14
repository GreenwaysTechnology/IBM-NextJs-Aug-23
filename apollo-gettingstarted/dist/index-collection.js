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
    user:[User]
}

`;
//Resolovers: Biz logic or implementation of schema
const users = [{
        id: 1,
        firstName: 'Subramanian',
        lastName: 'Murugan',
        age: 12,
        points: 100.89,
        status: true
    }, {
        id: 2,
        firstName: 'A',
        lastName: 'B',
        age: 12,
        points: 100.89,
        status: true
    }, {
        id: 3,
        firstName: 'A1',
        lastName: 'A2',
        age: 12,
        points: 100.89,
        status: true
    }];
const resolvers = {
    //Query
    Query: {
        user() {
            return users;
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
