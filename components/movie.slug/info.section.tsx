import Star from "@components/icons/star"
import styled from "@emotion/styled"
import {colorsMain} from "@styles/styles"
import cuid from "cuid"
import {FC} from "react"

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

const InfoWrapper = styled.aside`
  max-width: 40rem;
  margin: 0 auto;
  .info {
    display: flex;
    justify-content: space-evenly;
    p {
      font-size: 1.35em;
      text-transform: capitalize;
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

interface Category {
  name: string
}

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
}): JSX.Element => (
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
    {categories.length && (
      <ul className="categories">
        {categories.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    )}
  </InfoWrapper>
)

export default InfoSection
