import {extendType, intArg, nonNull, stringArg} from "nexus"
import {Context} from "../../../lib/context"

export const Query = extendType({
  type: "Query",
  definition(t) {
    t.list.field("movies", {
      type: "Movie",
      async resolve(parent, arg, ctx: Context) {
        return await ctx.prisma.movie.findMany()
      },
    })
    t.field("movie", {
      type: "Movie",
      args: {
        id: nonNull(intArg()),
      },
      async resolve(parent, {id}, ctx: Context) {
        return await ctx.prisma.movie.findFirst({where: {id}})
      },
    })
  },
})
