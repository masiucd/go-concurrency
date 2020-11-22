import { GraphQLServer } from "graphql-yoga"
import { PrismaClient } from "@prisma/client"
import { Query, Mutation } from "./resolvers"

const p = new PrismaClient()

const resolvers = {
  Query,
  Mutation,
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
