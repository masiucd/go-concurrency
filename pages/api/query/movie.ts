import {intArg, nonNull} from "nexus"
import {Context} from "../../../lib/context"
import {QueryT} from "./type"

export const getMovies = (t: QueryT): void => {
  t.list.field("movies", {
    type: "Movie",
    async resolve(_, __, ctx: Context) {
      return await ctx.prisma.movie.findMany()
    },
  })
}

export const getMovie = (t: QueryT): void => {
  t.field("movie", {
    type: "Movie",
    args: {
      id: nonNull(intArg()),
    },
    async resolve(_, {id}, ctx: Context) {
      return await ctx.prisma.movie.findFirst({where: {id}})
    },
  })
}
