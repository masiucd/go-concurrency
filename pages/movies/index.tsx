import {useQuery} from "@apollo/client"
import {ButtonPrimary} from "@components/common/button"
import Capture from "@components/common/capture"
import {css} from "@emotion/react"
import styled from "@emotion/styled"
import {above, below} from "@styles/media-query"
import * as styles from "@styles/styles"
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
const borderStyle = (isInner = false) => css`
  border-top-left-radius: ${isInner ? "6px 110px" : "37px 140px"};
  border-top-right-radius: ${isInner ? "6px 20px" : "23px 130px"};
  border-bottom-left-radius: 110px 19px;
  border-bottom-right-radius: 120px 24px;
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
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr;
  }
`
const Movies = styled.div`
  background-color: ${styles.bgNuisances.bg900};
  position: relative;
  border: 2px solid ${styles.colorsMain.highlight};
  ${borderStyle()};
  display: flex;
  flex-flow: column;
  justify-content: center;
  @media ${below.tabletXL} {
    min-height: 45rem;
  }
`

const MoviesList = styled.ul`
  background-color: ${styles.bgNuisances.bg800};
  display: flex;
  flex-flow: column;
  justify-content: center;
  border-radius: 4px;
  overflow-y: scroll;
  padding-left: 2rem;
  padding: 2rem;
  min-height: 32rem;
  max-height: 32rem;
  ${borderStyle(true)};
  @media ${below.tabletXL} {
    font-size: 2.65rem;
    min-height: 35rem;
    max-height: 35rem;
  }
`

const ListItem = styled(motion.li)`
  font-weight: bold;
  font-size: 4rem;
  max-height: 5rem;
  @media ${below.tabletXL} {
    font-size: 2.65rem;
  }
`
interface Pagination {
  moviesTake: number
  isDisabled: boolean
}

const MoviesPage = (): JSX.Element => {
  const [pagination, setPagination] = useState<Pagination>({
    moviesTake: 3,
    isDisabled: false,
  })

  const {data, error, loading, fetchMore} = useQuery<MovieData>(MOVIES_QUERY, {
    variables: {
      moviesTake: 3,
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

          <Movies>
            <MoviesList>
              {data?.movies.map(({id, title, slug}) => {
                return (
                  <ListItem
                    key={id}
                    whileHover={{
                      opacity: 0.65,
                      letterSpacing: "0.02cm",
                      color: styles.colorsMain.highlight,
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
            </MoviesList>
            <CheckForMoreMoviesButton
              isDisabled={pagination.isDisabled}
              fetchMore={() => {
                fetchMore({
                  query: MOVIES_QUERY,
                  variables: {
                    moviesTake: pagination.moviesTake + 3,
                  },
                  updateQuery: (prev, {fetchMoreResult, variables}) => {
                    setPagination((prev) => ({
                      ...prev,
                      moviesTake: variables?.moviesTake + 3,
                    }))
                    if (!fetchMoreResult?.movies.length) {
                      return prev
                    }
                    if (data?.movies.length === fetchMoreResult?.movies.length) {
                      setPagination((prev) => ({...prev, isDisabled: true}))
                    }
                    return Object.assign({}, prev, {
                      movies: [...fetchMoreResult.movies],
                    })
                  },
                })
              }}
            />
          </Movies>
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
  return (
    <div
      css={css`
        position: absolute;
        bottom: 1rem;
        left: 1rem;
        @media ${above.tabletXL} {
        }
      `}
    >
      <ButtonPrimary
        css={css`
          width: 12rem;
        `}
        whileHover={{
          opacity: 0.75,
        }}
        disabled={isDisabled}
        onClick={fetchMore}
      >
        {isDisabled ? "No more movies" : "Check for more movies"}
      </ButtonPrimary>
    </div>
  )
}

export default MoviesPage
