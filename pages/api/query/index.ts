import {extendType} from "nexus"
import {getComments} from "./comment"

import {getMovie, getMovies} from "./movie"

export const Query = extendType({
  type: "Query",
  definition(t) {
    getMovies(t)
    getMovie(t)
    getComments(t)
  },
})
