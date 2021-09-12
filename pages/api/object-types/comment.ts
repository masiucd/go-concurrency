import {objectType} from "nexus"

export const Comment = objectType({
  name: "Comment",
  definition(t) {
    t.nonNull.int("id")
    t.nonNull.string("text")
    t.string("movieId")
    t.string("ownerId")
    t.field("owner", {type: "User"})
    t.field("movie", {type: "Movie"})
  },
})
