import {css} from "@emotion/react"
import {sizes} from "@styles/styles"
import Link from "next/link"

const Header = () => {
  return (
    <header
      css={css`
        min-height: ${sizes.headerHeight};
        display: flex;
        align-items: center;
      `}
    >
      <h3
        css={css`
          margin-left: 5rem;
        `}
      >
        <Link href="/">
          <a>Sick movies</a>
        </Link>
      </h3>
    </header>
  )
}

export default Header
