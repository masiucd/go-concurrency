import {objectType} from "nexus"

export const Movie = objectType({
  name: "Movie",
  definition(t) {
    t.nonNull.int("id", {description: "uses int instead of uuid"})
    t.nonNull.string("title", {description: "movie title"})
    t.nonNull.int("releaseYear", {description: "year released"})
    t.nonNull.int("price", {description: "amount to see the movie"})
    t.nonNull.int("rating", {description: "rating from 0 to 5"})
    t.nonNull.string("image", {description: "URL string"})
    t.list.nullable.field("comments", {type: "Comment"})
  },
})
