import {useQuery} from "@apollo/client"
import {ButtonPrimary} from "@components/common/button"
import Star from "@components/icons/star"
import {css} from "@emotion/react"
import {JSX} from "@emotion/react/jsx-runtime"
import styled from "@emotion/styled"
import {colorsMain} from "@styles/styles"
import cuid from "cuid"
import gql from "graphql-tag"
import Image from "next/image"
import Link from "next/link"
import {useRouter} from "next/router"
import {FC, Fragment} from "react"

const formatPrice = (price: number) => {
  const [tens, unit, ...rest] = price.toString(10).split("")
  return `${tens}${unit}.${rest.join("")}$`
}
const MAX_STARS = 5

const generateStars = (stars: number) => {
  const xs = []
  const restOfStars = MAX_STARS % stars
  for (let i = 1; i <= stars; i++) {
    xs.push(<Star filled key={cuid()} />)
  }
  if (restOfStars > 0) {
    for (let i = 1; i <= restOfStars; i++) {
      xs.push(<Star key={cuid()} />)
    }
  }
  return xs
}

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
          />
        </ImgWrapper>
        <div
          className="actions"
          css={css`
            border: 2px solid red;
            max-width: 500px;
            margin: 0 auto;
            padding: 1rem 0.5rem;
            display: flex;
            justify-content: space-between;
          `}
        >
          <ButtonPrimary
            whileHover={{
              width: "7em",
            }}
          >
            Add to cart
          </ButtonPrimary>
          <ButtonPrimary
            css={css`
              width: 8rem;
            `}
            whileHover={{
              width: "9em",
            }}
          >
            Leave a review
          </ButtonPrimary>
        </div>
      </StyledMovie>
    </Fragment>
  )
}
export default SingleMoviePage

const InfoWrapper = styled.aside`
  max-width: 40rem;
  margin: 0 auto;
  .info {
    display: flex;
    justify-content: space-evenly;
    p {
      font-size: 1.35em;
      span {
        color: ${colorsMain.highlight};
        font-weight: bold;
      }
    }
  }
  .categories {
    display: flex;
    list-style: square;
    justify-content: space-evenly;
    padding: 0.25rem 0;
    li {
      font-size: 1.25rem;
      text-transform: capitalize;
      &::first-letter {
        color: ${colorsMain.primary};
      }
    }
  }
`

interface InfoSectionProps {
  releaseYear: number
  rating: number
  price: number
  categories: Category[]
}

const InfoSection: FC<InfoSectionProps> = ({
  releaseYear,
  rating,
  price,
  categories,
}): JSX.Element => {
  return (
    <InfoWrapper>
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
      <ul className="categories">
        {categories.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </InfoWrapper>
  )
}
