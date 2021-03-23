import { ApolloServer, gql } from 'apollo-server';

export const typeDefs = gql`

  type Book {
    title: String
    author: String
  }

  type TravelNotice {
    title: String
    description: String
    detail : String
  }
  
  type CovidNotice {
    title: String
    description: String
    detail : String
  }

  type Query {  
    books: [Book]
    travelNotice : [TravelNotice]
    covidNotice: CovidNotice
  }

  type Mutation {
    hello(name: String): String 
  }

`;

