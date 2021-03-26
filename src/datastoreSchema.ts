import {
  intArg,
  makeSchema,
  nonNull,
  objectType,
  stringArg,
  inputObjectType,
  arg,
  asNexusMethod,
  enumType,
} from 'nexus'
import { GraphQLDateTime } from 'graphql-iso-date'
import { Context } from './context'
import { CovidNoticeKey, TravelNoticeKey } from "./constants/key";

export const DateTime = asNexusMethod(GraphQLDateTime, 'date')

const Query = objectType({
  name: 'Query',
  definition(t) {

    t.list.nonNull.field('notices', {
      type: 'Notices',
      resolve: (_parent, _args, context: Context) => {
        return context.prisma.notices.findMany()
      },
    })

    t.field('CovidNotice', {
      type: 'Notices',
      resolve: (_parent, _args, context: Context) => {
        return context.prisma.notices.findFirst(
          {
            where: { Title: CovidNoticeKey }
          }
        )
      },
    })

    t.field('TravelNotice', {
      type: 'Notices',
      resolve: (_parent, _args, context: Context) => {
        return context.prisma.notices.findFirst(
          {
            where: { Title: TravelNoticeKey }
          }
        )
      },
    })


    // t.nonNull.list.nonNull.field('covidNotice', {
    //   type: 'CovidNotice',
    //   resolve: (_parent, _args, context: Context) => {
    //     return context.prisma.notices.findUnique({
    //       where : { Id: _args}
    //     })
    //   },
    // })

    // t.nonNull.list.nonNull.field('travelNotice', {
    //   type: 'TravelNotice',
    //   resolve: (_parent, _args, context: Context) => {
    //     return context.prisma.notices.findUnique({
    //       where : { Id: _args}
    //     })
    //   },
    // })

    // t.nullable.field('postById', {
    //   type: 'Post',
    //   args: {
    //     id: intArg(),
    //   },
    //   resolve: (_parent, args, context: Context) => {
    //     return context.prisma.post.findUnique({
    //       where: { id: args.id || undefined },
    //     })
    //   },
    // })
    
    // t.nonNull.list.nonNull.field('feed', {
    //   type: 'Post',
    //   args: {
    //     searchString: stringArg(),
    //     skip: intArg(),
    //     take: intArg(),
    //     orderBy: arg({
    //       type: 'PostOrderByUpdatedAtInput',
    //     }),
    //   },
    //   resolve: (_parent, args, context: Context) => {
    //     const or = args.searchString
    //     ? {
    //       OR: [
    //         { title: { contains: args.searchString } },
    //         { content: { contains: args.searchString } },
    //       ],
    //     }
    //     : {}
        
    //     return context.prisma.post.findMany({
    //       where: {
    //         published: true,
    //         ...or,
    //       },
    //       take: args.take || undefined,
    //       skip: args.skip || undefined,
    //       orderBy: args.orderBy || undefined,
    //     })
    //   },
    // })
    
    // t.list.field('draftsByUser', {
    //   type: 'Post',
    //   args: {
    //     userUniqueInput: nonNull(
    //       arg({
    //         type: 'UserUniqueInput',
    //       }),
    //       ),
    //     },
    //     resolve: (_parent, args, context: Context) => {
    //       return context.prisma.user
    //       .findUnique({
    //         where: {
    //           id: args.userUniqueInput.id || undefined,
    //           email: args.userUniqueInput.email || undefined,
    //         },
    //       })
    //       // .posts({
    //       //   where: {
    //       //     published: false,
    //       //   },
    //       // })
    //     },
    //   })
    },
  })
  
  const Mutation = objectType({
    name: 'Mutation',
    definition(t) {

      // t.nonNull.field('signupUser', {
      //   type: 'User',
      //   args: {
      //     data: nonNull(
      //       arg({
      //         type: 'UserCreateInput',
      //       }),
      //       ),
      //     },
      //     resolve: (_, args, context: Context) => {
      //       const postData = args.data.posts?.map((post:any) => {
      //         return { title: post.title, content: post.content || undefined }
      //       })
      //       return context.prisma.user.create({
      //         data: {
      //           name: args.data.name,
      //           email: args.data.email,
      //           // posts: {
      //           //   create: postData,
      //           // },
      //         },
      //       })
      //     },
      //   })
        
        // t.field('createDraft', {
        //   type: 'Post',
        //   args: {
        //     data: nonNull(
        //       arg({
        //         type: 'PostCreateInput',
        //       }),
        //       ),
        //       authorEmail: nonNull(stringArg()),
        //     },
        //     resolve: (_, args, context: Context) => {
        //       return context.prisma.post.create({
        //         data: {
        //           title: args.data.title,
        //           content: args.data.content,
        //           // author: {
        //           //   connect: { email: args.authorEmail },
        //           // },
        //         },
        //       })
        //     },
        //   })
          
          // t.field('togglePublishPost', {
          //   type: 'Post',
          //   args: {
          //     id: nonNull(intArg()),
          //   },
          //   resolve: async (_, args, context: Context) => {
          //     try {
          //       const post = await context.prisma.post.findUnique({
          //         where: { id: args.id || undefined },
          //         select: {
          //           published: true,
          //         },
          //       })
          //       return context.prisma.post.update({
          //         where: { id: args.id || undefined },
          //         data: { published: !post?.published },
          //       })
          //     } catch (e) {
          //       throw new Error(
          //         `Post with ID ${args.id} does not exist in the database.`,
          //         )
          //       }
          //     },
          //   })
            
            // t.field('incrementPostViewCount', {
            //   type: 'Post',
            //   args: {
            //     id: nonNull(intArg()),
            //   },
            //   resolve: (_, args, context: Context) => {
            //     return context.prisma.post.update(
            //     {
            //       where: { id: args.id || undefined },
            //       // data: {
            //       //   viewCount: {
            //       //     increment: 1,
            //       //   },
            //       // },
            //     }
            //     )
            //   },
            // })
            
            // t.field('deletePost', {
            //   type: 'Post',
            //   args: {
            //     id: nonNull(intArg()),
            //   },
            //   resolve: (_, args, context: Context) => {
            //     return context.prisma.post.delete({
            //       where: { id: args.id },
            //     })
            //   },
            // })
                 
            t.field('deleteNotice', {
              type: 'Notices',
              args: {
                id: nonNull(intArg()),
              },
              resolve: (_, args, context: Context) => {
                return context.prisma.notices.delete({
                  where: { Id: args.id },
                })
              },
            })

          },
        })

        const  Notices = objectType({
          name: 'Notices',
          definition(t) {

            t.nonNull.int('Id')
            t.string('Title')
            t.string('Description')
            t.string('Details')        
          },
        })       
        
        // const User = objectType({
        //   name: 'User',
        //   definition(t) {

        //     t.nonNull.int('id')
        //     t.string('name')
        //     t.nonNull.string('email')
        //     t.nonNull.list.nonNull.field('posts', {
        //       type: 'Post',
        //       resolve: (parent, _, context: Context) => {
        //         return context.prisma.user
        //         .findUnique({
        //           where: { id: parent.id || undefined },
        //         })
        //        // .posts()
        //       },
        //     })
        //   },
        // })
        
        // const Post = objectType({
        //   name: 'Post',
        //   definition(t) {
        //     t.nonNull.int('id')
        //     t.nonNull.field('createdAt', { type: 'DateTime' })
        //     t.nonNull.field('updatedAt', { type: 'DateTime' })
        //     t.nonNull.string('title')
        //     t.string('content')
        //     t.nonNull.boolean('published')
        //     t.nonNull.int('viewCount')
        //     t.field('author', {
        //       type: 'User',
        //       resolve: (parent, _, context: Context) => {
        //         return context.prisma.post
        //         .findUnique({
        //           where: { id: parent.id || undefined },
        //         })
        //        // .author()
        //       },
        //     })
        //   },
        // })
        
        const SortOrder = enumType({
          name: 'SortOrder',
          members: ['asc', 'desc'],
        })
        
        const PostOrderByUpdatedAtInput = inputObjectType({
          name: 'PostOrderByUpdatedAtInput',
          definition(t) {
            t.nonNull.field('updatedAt', { type: 'SortOrder' })
          },
        })
        
        const UserUniqueInput = inputObjectType({
          name: 'UserUniqueInput',
          definition(t) {
            t.int('id')
            t.string('email')
          },
        })
        
        const PostCreateInput = inputObjectType({
          name: 'PostCreateInput',
          definition(t) {
            t.nonNull.string('title')
            t.string('content')
          },
        })
        
        const UserCreateInput = inputObjectType({
          name: 'UserCreateInput',
          definition(t) {
            t.nonNull.string('email')
            t.string('name')
            t.list.nonNull.field('posts', { type: 'PostCreateInput' })
          },
        })
        
        export const schema = makeSchema({
          types: [
            Query,
            Mutation,
            Notices,

            UserUniqueInput,
            UserCreateInput,
            PostCreateInput,
            SortOrder,
            PostOrderByUpdatedAtInput,
            DateTime,
          ],
          outputs: {
            schema: __dirname + '/../schema.graphql',
            typegen: __dirname + '/generated/nexus.ts',
          },
          contextType: {
            module: require.resolve('./context'),
            export: 'Context',
          },
          sourceTypes: {
            modules: [
              {
                module: '@prisma/client',
                alias: 'prisma',
              },
            ],
          },
        })