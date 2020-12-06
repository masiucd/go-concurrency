import { GraphQLServer } from "graphql-yoga"
import { PrismaClient } from "@prisma/client"
import resolvers from "./resolvers"

const server = new GraphQLServer({
  typeDefs: "src/schema.graphql",
  resolvers,
  context: ({ request, response }) => {
    return { request, response, p: new PrismaClient() }
  },
})

server.start(() => console.log("server is on port 4000 ✌🏻"))
