import { Query } from "./query"
import { Mutation } from "./mutation"
import { ResolverType } from "./types"
export { Query, Mutation }

const resolvers: ResolverType = {
  Query,
  Mutation,
}

export default resolvers
