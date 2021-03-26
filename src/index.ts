import { ApolloServer } from 'apollo-server';
import { context } from './context';
import { schema }  from "./datastoreSchema";

const server = new ApolloServer(
  { 
    context: context,
    schema: schema
  }
);
 
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
  
  