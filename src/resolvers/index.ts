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

export const resolvers = {
  Query: {
    travelNotice:() => books, 
    covidNotice:() => books
  },
  Mutation: {      
    refresh: async (cacheKey:String) =>  "awesome stuff!!!",
    remove: async (cacheKey:String) =>  "awesome stuff!!!",
  }
};