import {useQuery} from "@apollo/client"
import gql from "graphql-tag"
import React from "react"

const MOVIES_QUERY = gql`
  query movies {
    movies {
      title
      rating
      releaseYear
      id
      comments {
        text
      }
    }
  }
`
const MoviesPage = () => {
  const {data, error, loading} = useQuery(MOVIES_QUERY, {fetchPolicy: "cache-and-network"})

  if (loading) {
    return <div>Loading ...</div>
  }
  if (error) {
    return <div>Error: {error.message}</div>
  }
  console.log("data", data.movies)
  return (
    <div>
      <h1>MoviesPage</h1>
      {data.movies.map((m) => (
        <p key={m.id}>{m.title}</p>
      ))}
    </div>
  )
}

export default MoviesPage
