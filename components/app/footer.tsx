import {css} from "@emotion/react"
import {sizes} from "@styles/styles"
import React from "react"

const Footer = () => {
  return (
    <footer
      css={css`
        min-height: ${sizes.footerHeight};
        border: 1px solid #fff;
      `}
    >
      <h1>Footer</h1>
    </footer>
  )
}

export default Footer
