import { PrismaClient } from "@prisma/client"

export const Query = {
  users: async (root: any, args: any, ctx: { p: PrismaClient }, info: any) => {
    return await ctx.p.user.findMany()
  },
  courses: async (
    root: any,
    args: any,
    ctx: { p: PrismaClient },
    info: any
  ) => {
    return await ctx.p.course.findMany({ include: { students: true } })
  },
}
