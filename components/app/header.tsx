import {css} from "@emotion/react"
import {sizes} from "@styles/styles"

const Header = () => {
  return (
    <header
      css={css`
        min-height: ${sizes.headerHeight};
        border: 1px solid #fff;
      `}
    >
      <h1>Header</h1>
    </header>
  )
}

export default Header
