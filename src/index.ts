import { GraphQLServer } from "graphql-yoga"
import { PrismaClient } from "@prisma/client"
const p = new PrismaClient()

const resolvers = {
  Query: {
    users: async (
      root: any,
      args: any,
      ctx: { p: PrismaClient },
      info: any
    ) => {
      return await p.user.findMany({ include: { posts: true } })
    },
    posts: async (
      root: any,
      args: any,
      ctx: { p: PrismaClient },
      info: any
    ) => {
      return await p.post.findMany({ include: { author: true } })
    },
  },
  Mutation: {
    createUser: async (
      root: any,
      args: { input: { name: string; email: string } },
      ctx: { p: PrismaClient },
      info: any
    ) => {
      const user = await ctx.p.user.create({
        data: {
          name: args.input.name,
          email: args.input.email,
        },
      })
      return user
    },

    createPost: async (
      root: any,
      args: {
        input: {
          title: string
          content: string
          published: boolean
          author: number
        }
      },
      ctx: { p: PrismaClient },
      info: any
    ) => {
      const post = await ctx.p.post.create({
        data: {
          title: args.input.title,
          content: args.input.content,
          author: {
            connect: {
              id: args.input.author,
            },
          },
        },
      })
      return post
    },
  },
}

const server = new GraphQLServer({
  typeDefs: "src/schema.graphql",
  resolvers,
  context: req => ({
    ...req,
    p,
  }),
})

server.start(() => console.log("server is on port 4000 ✌🏻"))
