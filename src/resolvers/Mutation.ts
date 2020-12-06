import { Ctx, Input, RegisterUserInput } from "./types"
import bcrypt from "bcryptjs"

export const Mutation = {
  registerUser: async (_: never, args: Input<RegisterUserInput>, ctx: Ctx) => {
    let user = await ctx.p.user.findOne({ where: { email: args.input.email } })
    if (user) {
      throw new Error("User already exists")
    }

    user = await ctx.p.user.create({
      data: {
        name: args.input.name,
        email: args.input.email,
        password: await bcrypt.hash(args.input.password, 8),
      },
    })

    // 1. create function that create token
    // 1. create function create cookies
    const token = tokenResponse(user)

    return {
      token,
      user,
    }
    // const user = await ctx.p.user.create({
    //   data: {
    //     name: args.input.name,
    //     email: args.input.email,
    //     password: args.input.password,
    //   },
    // })
    // return user
  },
}
