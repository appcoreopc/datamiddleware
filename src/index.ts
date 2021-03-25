import { ApolloServer } from 'apollo-server';
import { typeDefs } from "./schemas";
import { resolvers } from "./resolvers";
import { context } from './context';
import { schema }  from "./datastoreSchema";

//import { PrismaClient } from '@prisma/client'
//const prisma = new PrismaClient()

// async function main() {
//   const allUsers = await prisma.user.findMany();
//   console.log(allUsers);
// }

// main()
//   .catch(e => {
//     throw e
//   })
//   .finally(async () => {
//     await prisma.$disconnect()
//   })

const server = new ApolloServer(
  {
    //typeDefs: typeDefs, 
    //resolvers: resolvers, 
    context: context,
    schema: schema
  }
);
  
  // The `listen` method launches a web server.
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
  
  