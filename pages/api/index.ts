import {ApolloServer} from "apollo-server-micro"
import {DateTimeResolver} from "graphql-scalars"
import {NextApiHandler, NextApiRequest, NextApiResponse} from "next"
import {asNexusMethod, makeSchema, nonNull, nullable, objectType, stringArg} from "nexus"
import path from "path"
import cors from "micro-cors"
import prisma from "../../lib/prisma"
import {setCookie} from "../../util/cookies"

export const GQLDate = asNexusMethod(DateTimeResolver, "date")

// const User = objectType({
//   name: "User",
// })

const Comment = objectType({
  name: "Comment",
  definition(t) {
    t.id("id")
    t.string("text")
    t.string("movieId")
    t.string("ownerId")
    // t.field("movie", {
    //   type: "Movie",
    // })
  },
})

export const schema = makeSchema({
  types: [Comment],
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

const apolloServer = new ApolloServer({schema})
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

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse<any>) => {
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
