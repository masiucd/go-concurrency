import { GraphQLServer } from "graphql-yoga"
import { PrismaClient } from "@prisma/client"
const p = new PrismaClient()

const typeDefs = `

input UserInput {
  name: String!
  email: String!
}

type User {
  id: ID!
  name: String!
  email: String!
  posts: [Post]
}

type Post {
  id:        ID
  title:     String!
  content:   String
  published: Boolean
  author:   User
}



  type Query {
    users: [User]!
    posts: [Post]
  }

  type Mutation {
    createUser(input: UserInput): User!

  }

`

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
      return await p.post.findMany()
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
  },
}

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: req => ({
    ...req,
    p,
  }),
})

server.start(() => console.log("server is on port 4000 ✌🏻"))
