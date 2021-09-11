import {ApolloServer} from "apollo-server-micro"
import {DateTimeResolver} from "graphql-scalars"
import {NextApiHandler, NextApiRequest, NextApiResponse} from "next"
import {asNexusMethod, list, makeSchema, nonNull, nullable, objectType, stringArg} from "nexus"
import path from "path"
import cors from "micro-cors"
// import prisma from "../../lib/prisma"
import {setCookie} from "../../util/cookies"
import {Context, createContext} from "../../lib/context"

export const GQLDate = asNexusMethod(DateTimeResolver, "date")

const User = objectType({
  name: "User",
  definition(t) {
    t.nonNull.int("id")
    t.nonNull.string("firstName")
    t.nonNull.string("lastName")
    t.nonNull.string("email")
    t.nonNull.string("password")
    t.int("role")
    t.list.nullable.field("comments", {type: "Comment"})
  },
})

const Movie = objectType({
  name: "Movie",
  definition(t) {
    t.nonNull.int("id", {description: "uses int instead of uuid"})
    t.nonNull.string("title", {description: "movie title"})
    t.nonNull.int("releaseYear", {description: "year released"})
    t.nonNull.int("price", {description: "amount to see the movie"})
    t.nonNull.int("rating", {description: "rating from 0 to 5"})
    t.nonNull.string("image", {description: "URL string"})
    t.list.nullable.field("comments", {type: "Comment"})
  },
})

const Comment = objectType({
  name: "Comment",
  definition(t) {
    t.nonNull.int("id")
    t.nonNull.string("text")
    t.string("movieId")
    t.string("ownerId")
    t.field("owner", {type: "User"})
    t.field("movie", {type: "Movie"})
  },
})

export const schema = makeSchema({
  types: [Comment, User, Movie],
  outputs: {
    typegen: path.join(process.cwd(), "generated/nexus-typegen.ts"),
    schema: path.join(process.cwd(), "generated/schema.graphql"),
  },
})

export const config = {
  api: {
    bodyParser: false,
  },
}

const apolloServer = new ApolloServer({schema, context: createContext})
let apolloServerHandler: NextApiHandler

async function getApolloServerHandler() {
  if (!apolloServerHandler) {
    await apolloServer.start()
    apolloServerHandler = apolloServer.createHandler({
      path: "/api",
    })
  }
  return apolloServerHandler
}

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const apolloServerHandler = await getApolloServerHandler()
  if (req.method === "OPTIONS") {
    res.end()
    return
  }
  setCookie(res, "movie-app", "movie-middleware")
  return apolloServerHandler(req, res)
}

// @ts-ignore
export default cors()(handler)
