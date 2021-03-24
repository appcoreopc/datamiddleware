import { PrismaClient } from '@prisma/client'

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
    id: 10000
  },
];


const prisma = new PrismaClient()

export const resolvers = {
  Query: {
    travelNotice:() => books, 
    covidNotice:() => books
  },
  Mutation: {      
    refresh: async (cacheKey:String) =>  "refresh awesome stuff!!!",
    remove: async (cacheKey:String) =>  "remove awesome stuff!!!",
  }
};