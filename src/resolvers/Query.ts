import { Ctx } from "./types"

export const Query = {
  users: async (root: never, args: never, ctx: Ctx) => {
    return await ctx.p.user.findMany()
  },
}
