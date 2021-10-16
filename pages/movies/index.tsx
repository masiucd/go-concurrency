import {useQuery} from "@apollo/client"
import {ButtonPrimary} from "@components/common/button"
import Capture from "@components/common/capture"
import {css} from "@emotion/react"
import styled from "@emotion/styled"
import {above, below} from "@styles/media-query"
import {colorsMain} from "@styles/styles"
import {motion} from "framer-motion"
import gql from "graphql-tag"
import Head from "next/head"
import Link from "next/link"
import {Fragment, useState} from "react"

const capString = (input: string): string => input[0].toUpperCase() + input.toLowerCase().slice(1)

const MOVIES_QUERY = gql`
  query movies($moviesSkip: Int, $moviesTake: Int) {
    movies(skip: $moviesSkip, take: $moviesTake) {
      title
      rating
      releaseYear
      id
      slug
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
  slug: string // String!
  comments: Comment[]
}

interface MovieData {
  movies: Array<Movie>
}

const captureStyles = css`
  .text-part {
    font-size: 8rem;
  }
  @media ${above.tabletXL} {
    padding-right: 2rem;
  }
  @media ${below.tabletXL} {
    .text-part {
      font-size: 6rem;
    }
    h3 {
      height: 8rem;
    }
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  min-height: 85vh;
`

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  @media ${above.tabletXL} {
    grid-template-columns: 1fr 1fr;
  }
`

const MoviesList = styled.ul`
  padding: 2rem 0;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  @media ${above.tabletXL} {
    padding-left: 2rem;
  }
`

const ListItem = styled(motion.li)`
  font-weight: bold;
  margin-left: 1rem;
  max-width: auto;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  padding: 0;
  font-size: 4.5rem;

  @media ${above.tabletXL} {
    max-width: 600px;
    font-size: 6rem;
    max-height: 9rem;
  }
`
interface Pagination {
  moviesSkip: number
  moviesTake: number
  isDisabled: boolean
}

const MoviesPage = (): JSX.Element => {
  const [pagination, setPagination] = useState<Pagination>({
    moviesSkip: 0,
    moviesTake: 3,
    isDisabled: false,
  })

  const {data, error, loading, fetchMore} = useQuery<MovieData>(MOVIES_QUERY, {
    variables: {
      moviesSkip: pagination.moviesSkip,
      moviesTake: pagination.moviesTake,
    },
    notifyOnNetworkStatusChange: true,
  })

  if (loading) {
    return <div>Loading ...</div>
  }
  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <Fragment>
      <Head>
        <title>Movies</title>
      </Head>
      <Wrapper>
        <Section>
          <Capture incomingStyles={captureStyles} />

          <MoviesList>
            {data?.movies.map(({id, title, slug}) => {
              return (
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
                  <Link href={`/movies/${slug}`}>
                    <a>{capString(title)}</a>
                  </Link>
                </ListItem>
              )
            })}
            <ListItem
              css={css`
                margin-top: auto;
              `}
            >
              <CheckForMoreMoviesButton
                isDisabled={pagination.isDisabled}
                fetchMore={() => {
                  fetchMore({
                    query: MOVIES_QUERY,
                    variables: {
                      moviesSkip: pagination.moviesSkip + 3,
                      moviesTake: 3,
                    },
                    updateQuery: (prev, {fetchMoreResult, variables}) => {
                      setPagination((prev) => ({
                        ...prev,
                        moviesSkip: variables?.moviesSkip + 3,
                      }))
                      if (!fetchMoreResult?.movies.length) {
                        setPagination((prev) => ({...prev, isDisabled: true}))
                        return prev
                      }

                      return Object.assign({}, prev, {
                        movies: [...fetchMoreResult.movies],
                      })
                    },
                  })
                }}
              />
            </ListItem>
          </MoviesList>
        </Section>
      </Wrapper>
    </Fragment>
  )
}

interface CheckForMoreMoviesButtonProps {
  isDisabled: boolean
  fetchMore: () => void
}

function CheckForMoreMoviesButton({isDisabled, fetchMore}: CheckForMoreMoviesButtonProps) {
  return isDisabled ? (
    <ButtonPrimary>fsdfsdf</ButtonPrimary>
  ) : (
    <ButtonPrimary
      whileHover={{
        opacity: 0.75,
      }}
      disabled={isDisabled}
      onClick={fetchMore}
    >
      Check for more movies
    </ButtonPrimary>
  )
}

export default MoviesPage
