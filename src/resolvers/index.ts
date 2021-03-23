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
      books: () => books,
      travelNotice:() => books, 
      covidNotice:() => books
    },
    Mutation: {      
      hello: async (name:String) =>  "awesome stuff!!!"      
    }
  };