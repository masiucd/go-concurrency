import {nonNull, stringArg} from "nexus"

import {Context} from "../../../lib/context"
import {QueryT} from "./type"

export const getMovies = (t: QueryT): void => {
  t.list.field("movies", {
    type: "Movie",
    async resolve(_, __, ctx: Context): Promise<any> {
      return await ctx.prisma.movie.findMany({
        include: {
          comments: true,
          categories: true,
        },
      })
    },
  })
}

export const getMovie = (t: QueryT): void => {
  t.field("movie", {
    type: "Movie",
    args: {
      slug: nonNull(stringArg()),
    },
    async resolve(_, args, ctx: Context): Promise<any> {
      return await ctx.prisma.movie.findFirst({
        where: {
          slug: args.slug,
        },
        include: {comments: true, categories: true},
      })
    },
  })
}
