import { gql } from 'apollo-server';

export const typeDefs = gql`
 
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
    travelNotice : [TravelNotice]
    covidNotice: CovidNotice
  }

  type Mutation {
    refresh(cacheKey: String): String 
    remove(cacheKey: String): String 
  }

`;

