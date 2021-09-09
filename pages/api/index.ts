import {ApolloServer} from "apollo-server-micro"
import {DateTimeResolver} from "graphql-scalars"
import {NextApiHandler} from "next"
import {asNexusMethod, makeSchema, nonNull, nullable, objectType, stringArg} from "nexus"
import path from "path"
import cors from "micro-cors"
import prisma from "../../lib/prisma"

export const GQLDate = asNexusMethod(DateTimeResolver, "date")
