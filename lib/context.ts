import {PrismaClient} from "@prisma/client"
import {NextApiRequest, NextApiResponse} from "next"
import prisma from "./prisma"

export interface Context {
  req: NextApiRequest
  res: NextApiResponse
  prisma: PrismaClient
}

export function createContext(req: NextApiRequest, res: NextApiResponse) {
  return {
    ...req,
    ...res,
    prisma,
  }
}
