
npx prisma generate

npx prisma generate

Sample deletion notice


Query examples



Mutation to delete notices

mutation {
  deleteNotice(id:1)
  {
    Id
  }
}

Mutation to create notices

mutation{
  createNotice(id:3, title:"Sample notice", details:"Other notices", description:"other notice")
  {
    Id
  }
}

Please ensure it corresponse to args that has been defined.

  
