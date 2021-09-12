import {ObjectDefinitionBlock} from "nexus/dist/blocks"
import {Context} from "../../../lib/context"
import {QueryT} from "./type"

export const getComments = (t: QueryT) => {
  t.list.field("comments", {
    type: "Comment",
    // @ts-ignore
    async resolve(parent, args, {prisma}: Context) {
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
