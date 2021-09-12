import {intArg, nonNull} from "nexus"

import {Context} from "../../../lib/context"
import {QueryT} from "./type"

export const getComments = (t: QueryT): void => {
  t.list.field("comments", {
    type: "Comment",
    async resolve(src, args, {prisma}: Context): Promise<any> {
      return await prisma.comment.findMany({
        select: {
          text: true,
          movie: true,
          owner: true,
        },
      })
    },
  })
}

export const getComment = (t: QueryT): void => {
  t.field("comment", {
    type: "Comment",
    args: {
      id: nonNull(intArg()),
    },
    async resolve(src, {id}, ctx: Context): Promise<any> {
      return await ctx.prisma.comment.findUnique({
        where: {
          id,
        },
      })
    },
  })
}
