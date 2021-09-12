import {extendType} from "nexus"

import {getComment, getComments} from "./comment"
import {getMovie, getMovies} from "./movie"

export const Query = extendType({
  type: "Query",
  definition(t) {
    getMovies(t)
    getMovie(t)
    getComments(t)
    getComment(t)
  },
})
