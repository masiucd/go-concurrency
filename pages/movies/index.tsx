import {useQuery} from "@apollo/client"
import Capture from "@components/common/capture"
import {css} from "@emotion/react"
import styled from "@emotion/styled"
import {above, below} from "@styles/media-query"
import {colorsMain} from "@styles/styles"
import {motion} from "framer-motion"
import gql from "graphql-tag"
import Head from "next/head"
import Link from "next/link"
import React, {Fragment} from "react"

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
  font-size: 8rem;

  @media ${above.tabletXL} {
    max-width: 600px;
    font-size: 6rem;
    max-height: 9rem;
  }
`

const MoviesPage = () => {
  const {data, error, loading, fetchMore} = useQuery<MovieData>(MOVIES_QUERY, {
    fetchPolicy: "cache-and-network",
    variables: {
      moviesSkip: 0,
      moviesTake: 2,
    },
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
          <Capture
            incomingStyles={css`
              .text-part {
                font-size: 8rem;
              }
              @media ${above.tabletXL} {
                padding-right: 2rem;
              }
              @media ${below.tabletXL} {
                .text-part {
                  font-size: 8rem;
                }
              }
            `}
          />

          <MoviesList>
            {data?.movies.map(({id, title, slug}) => (
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
            ))}
            <ListItem>
              <button>More</button>
            </ListItem>
          </MoviesList>
        </Section>
      </Wrapper>
    </Fragment>
  )
}

export default MoviesPage
