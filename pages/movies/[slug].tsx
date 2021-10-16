import {useQuery} from "@apollo/client"
import Star from "@components/icons/star"
import styled from "@emotion/styled"
import {Movie} from "@prisma/client"
import {colorsMain} from "@styles/styles"
import cuid from "cuid"
import gql from "graphql-tag"
import Image from "next/image"
import Link from "next/link"
import {useRouter} from "next/router"
import {Fragment} from "react"

const formatPrice = (price: number) => {
  const [tens, unit, ...rest] = price.toString(10).split("")
  return `${tens}${unit}.${rest.join("")}$`
}

const generateStars = (rating: number) => {
  const xs = []
  for (let i = 1; i <= rating; i++) {
    xs.push(<Star key={cuid()} />)
  }
  return xs
}

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

const ImgWrapper = styled.div`
  border: 1px solid blue;
  height: 30em;
  display: flex;
  justify-content: center;
`

const StyledMovie = styled.section`
  border: 2px solid red;
  h3 {
    font-size: 9rem;
    text-align: center;
  }
  .info {
    display: flex;
    border: 2px solid red;
    max-width: 40rem;
    margin: 0 auto;
    justify-content: space-evenly;
    p {
      font-size: 1.35em;

      span {
        color: ${colorsMain.highlight};
        font-weight: bold;
      }
    }
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
        <div className="info">
          <p>
            year: <span>{releaseYear}</span>{" "}
          </p>
          <p>
            rating: <span>{generateStars(rating)}</span>{" "}
          </p>
          <p>
            price: <span>{formatPrice(price)}</span>{" "}
          </p>
        </div>
      </StyledMovie>
      <ImgWrapper>
        <Image
          src={`/images/${image}.jpg`}
          width={500}
          height={400}
          alt={`${title} poster`}
          quality={100}
        />
      </ImgWrapper>
    </Fragment>
  )
}
export default SingleMoviePage
