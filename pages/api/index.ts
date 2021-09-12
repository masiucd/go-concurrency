import {ApolloServer} from "apollo-server-micro"
import {DateTimeResolver} from "graphql-scalars"
import {NextApiHandler, NextApiRequest, NextApiResponse} from "next"
import {asNexusMethod, list, makeSchema, nonNull, nullable, objectType, stringArg} from "nexus"
import path from "path"
import cors from "micro-cors"
import {setCookie} from "../../util/cookies"
import {createContext} from "../../lib/context"
import {User} from "./object-types/user"
import {Movie} from "./object-types/movie"
import {Comment} from "./object-types/comment"
import {Query} from "./query"

export const GQLDate = asNexusMethod(DateTimeResolver, "date")

export const schema = makeSchema({
  types: [Comment, User, Movie, GQLDate, Query],
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
