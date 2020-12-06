import { PrismaClient } from "@prisma/client"

export interface Ctx {
  request: Request
  response: Response
  p: PrismaClient
}

export interface RegisterUserInput {
  name: string
  email: string
  password: string
}

export interface Input<T> {
  input: T
}

export type QueryMutationType<T> = {
  [key: string]: T
}

export type ResolverType = {
  [key: string]: QueryMutationType<Function>
}
