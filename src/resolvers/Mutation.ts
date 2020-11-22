import { PrismaClient } from "@prisma/client"

export const Mutation = {
  createUser: async (
    root: any,
    args: { input: { name: string; email: string; password: string } },
    ctx: { p: PrismaClient },
    info: any
  ) => {
    const user = await ctx.p.user.create({
      data: {
        name: args.input.name,
        email: args.input.email,
        password: args.input.password,
      },
    })
    return user
  },

  createCourse: async (
    root: any,
    args: {
      input: {
        title: string
      }
    },
    ctx: { p: PrismaClient },
    info: any
  ) => {
    const course = await ctx.p.course.create({
      data: {
        title: args.input.title,
      },
    })
    return course
  },
}
