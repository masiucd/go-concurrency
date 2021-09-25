import {nonNull, objectType, stringArg} from "nexus"

const Mutation = objectType({
  name: "Mutation",
  definition(t) {
    t.field("signup", {
      type: "User",
      args: {
        name: nonNull(stringArg()),
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      resolve: () => {
        return {}
      },
    })
  },
})

export {Mutation}
