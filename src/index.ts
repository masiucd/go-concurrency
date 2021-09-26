import { GraphQLServer } from "graphql-yoga"
import { PrismaClient } from "@prisma/client"

const p = new PrismaClient()

const typeDefs = `

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
