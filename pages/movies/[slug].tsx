import {useQuery} from "@apollo/client"
import Actions from "@components/movie.slug/actions"
import InfoSection from "@components/movie.slug/info.section"
import {JSX} from "@emotion/react/jsx-runtime"
import styled from "@emotion/styled"
import {bgNuisances} from "@styles/styles"
import gql from "graphql-tag"
import Image from "next/image"
import Link from "next/link"
import {useRouter} from "next/router"
import {Fragment} from "react"

interface Category {
  name: string
}

interface MovieDataResponse {
  movieItem: {
    id: number
    title: string
    releaseYear: number
    price: number
    rating: number
    image: string
    slug: string
    comments: {
      id: number
      text: string
      movieId: number
      ownerId: number
    }[]
    categories: Array<Category>
  }
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

const ImgWrapper = styled.div`
  height: 30em;
  max-width: 35em;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 0.25rem;
  img {
    border-radius: 4px;
  }
`

const StyledMovie = styled.section`
  border-radius: 122px 3px 122px 6px;
  max-width: 50em;
  margin: 0 auto;
  background-color: ${bgNuisances.bg900};
  padding: 1rem 0;
  h3 {
    font-size: 9rem;
    text-align: center;
  }
`

const SingleMoviePage = (): JSX.Element => {
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

  const {title, image, releaseYear, rating, price, categories} = data?.movieItem ?? fallBackRecord

  return (
    <Fragment>
      <Link href="/movies">
        <a> &#8592; Movies</a>
      </Link>

      <StyledMovie>
        <h3>{title}</h3>

        <InfoSection
          releaseYear={releaseYear}
          rating={rating}
          price={price}
          categories={categories}
        />
        <ImgWrapper>
          <Image
            src={`/images/${image}.jpg`}
            width={500}
            height={400}
            alt={`${title} poster`}
            quality={100}
            layout="fixed"
          />
        </ImgWrapper>
        <Actions />
      </StyledMovie>
    </Fragment>
  )
}
export default SingleMoviePage
