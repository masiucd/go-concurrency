import {objectType} from "nexus"

export const Category = objectType({
  name: "Category",
  definition(t) {
    t.nonNull.int("id", {description: "uses int instead of uuid"})
    t.nonNull.string("name", {description: "name of category"})
    t.list.nullable.field("movies", {type: "Movie"})
  },
})
