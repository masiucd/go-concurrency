import {ApolloServer} from "apollo-server-micro"
import {DateTimeResolver} from "graphql-scalars"
import cors from "micro-cors"
import {NextApiHandler, NextApiRequest, NextApiResponse} from "next"
import {asNexusMethod, makeSchema} from "nexus"
import path from "path"

import {createContext} from "../../lib/context"
import {setCookie} from "../../util/cookies"
import {Mutation} from "./mutation"
import {Category} from "./object-types/category"
import {Comment} from "./object-types/comment"
import {Movie} from "./object-types/movie"
import {User} from "./object-types/user"
import {Query} from "./query"

export const GQLDate = asNexusMethod(DateTimeResolver, "date")

export const schema = makeSchema({
  types: [Comment, User, Movie, GQLDate, Query, Category, Mutation],
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

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse): Promise<any> => {
  const apolloServerHandler = await getApolloServerHandler()
  if (req.method === "OPTIONS") {
    res.end()
    return
  }
  setCookie(res, "movie-app", "movie-middleware")
  return apolloServerHandler(req, res)
}

export default cors({
  allowCredentials: true,
  allowHeaders: ["X-HTTP-Method-Override", "Content-Type", "Authorization", "Accept", "movie-app"],
})(handler as any)
