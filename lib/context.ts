import {PrismaClient} from "@prisma/client"
import {NextApiHandler, NextApiRequest, NextApiResponse} from "next"

export interface Context {
  req: NextApiRequest
  res: NextApiResponse
  prisma: PrismaClient
}

const prisma = new PrismaClient()
export function createContext(req: NextApiRequest, res: NextApiResponse) {
  return {
    ...req,
    ...res,
    prisma,
  }
}
