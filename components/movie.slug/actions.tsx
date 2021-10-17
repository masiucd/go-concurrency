import {ButtonPrimary} from "@components/common/button"
import {css} from "@emotion/react"
import {colorsMain} from "@styles/styles"

const styles = css`
  max-width: 500px;
  margin: 0 auto;
  padding: 1rem 0.5rem;
  display: flex;
  justify-content: space-between;
`

const Actions = (): JSX.Element => (
  <div css={styles}>
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
        width: "8.5em",
      }}
    >
      Leave a review
    </ButtonPrimary>
    <ButtonPrimary
      css={css`
        width: 8rem;
        span {
          color: ${colorsMain.primary};
          font-weight: 700;
        }
      `}
      whileHover={{
        width: "8.5em",
      }}
    >
      Reviews <span>4</span>
    </ButtonPrimary>
  </div>
)

export default Actions
