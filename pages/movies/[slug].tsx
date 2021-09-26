import {useQuery} from "@apollo/client"
import {Movie} from "@prisma/client"
import gql from "graphql-tag"
import {useRouter} from "next/router"

interface MovieDataResponse {
  movieItem: Movie
}

const fallBackRecord = {
  title: "empty",
  releaseYear: -1,
  price: -1,
  rating: -1,
  image: "empty",
  slug: "empty",
  comments: [],
  categories: [],
}

const GET_MOVIE_QUERY = gql`
  query ($movieSlug: String!) {
    movieItem: movie(slug: $movieSlug) {
      title
      releaseYear
      price
      rating
      image
      slug
      comments {
        id
        text
      }
      categories {
        name
      }
    }
  }
`

// Get movie by slug

const SingleMoviePage = () => {
  const {query} = useRouter()
  const {data, loading, error} = useQuery<MovieDataResponse>(GET_MOVIE_QUERY, {
    variables: {
      movieSlug: query.slug,
    },
  })

  if (loading) {
    return <div>Loading ...</div>
  }
  if (error) {
    return <div>Error: {error.message}</div>
  }

  console.log("data.", data?.movieItem)
  const {title} = data?.movieItem ?? fallBackRecord

  return (
    <p>
      <p>asdasd</p>
      {title}
      <p>asdas</p>
    </p>
  )
}
export default SingleMoviePage
