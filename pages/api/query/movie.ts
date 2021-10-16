/* eslint-disable @typescript-eslint/no-explicit-any */
import {intArg, nonNull, stringArg} from "nexus"

import {Context} from "../../../lib/context"
import {QueryT} from "./type"

export const getMovies = (t: QueryT): void => {
  t.list.field("movies", {
    type: "Movie",
    args: {
      skip: intArg(),
      take: intArg(),
    },
    async resolve(_, {skip, take}, {prisma}: Context): Promise<any> {
      return await prisma.movie.findMany({
        skip: skip ? skip : 0,
        take: take ? take : 5,
        include: {
          categories: true,
          comments: true,
        },
        orderBy: {
          rating: "desc",
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
