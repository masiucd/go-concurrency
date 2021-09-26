import {useQuery} from "@apollo/client"
import styled from "@emotion/styled"
import {colorsMain} from "@styles/styles"
import {motion} from "framer-motion"
import gql from "graphql-tag"
import Link from "next/link"

const capString = (input: string): string => input[0].toUpperCase() + input.toLowerCase().slice(1)
const makeSlug = (input: string): string => input.toLowerCase().replace(/\s/g, "-")

const MOVIES_QUERY = gql`
  query movies {
    allMovies: movies {
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

interface Movie {
  id: number // Int!
  rating: number // Int!
  releaseYear: number // Int!
  title: string // String!
  comments: Comment[]
}

interface MovieData {
  allMovies: Array<Movie>
}

const Wrapper = styled.div`
  border: 2px solid red;
  display: flex;
  flex-flow: column wrap;
  min-height: 75vh;
`

const MoviesList = styled.ul`
  /* border: 2px solid red; */
`

const ListItem = styled(motion.li)`
  font-size: 7rem;
  font-weight: bold;
  margin-left: 1rem;
  height: 8rem;
  a {
    /* border: 2px solid red; */
    display: flex;
  }
`

const MoviesPage = () => {
  const {data, error, loading} = useQuery<MovieData>(MOVIES_QUERY, {
    fetchPolicy: "cache-and-network",
  })

  if (loading) {
    return <div>Loading ...</div>
  }
  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <Wrapper>
      <h1>MoviesPage</h1>
      <MoviesList>
        {data?.allMovies.map(({id, title}) => (
          <ListItem
            key={id}
            whileHover={{
              opacity: 0.65,
              letterSpacing: "0.05cm",
              color: colorsMain.highlight,
            }}
            transition={{
              duration: 0.2,
              damping: 5,
            }}
          >
            <Link href={`/movies/${makeSlug(title)}`}>
              <a>{capString(title)}</a>
            </Link>
          </ListItem>
        ))}
      </MoviesList>
    </Wrapper>
  )
}

export default MoviesPage
