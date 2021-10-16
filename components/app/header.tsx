import {css} from "@emotion/react"
import {below} from "@styles/media-query"
import {colorsMain, sizes} from "@styles/styles"
import cuid from "cuid"
import {motion} from "framer-motion"
import Link from "next/link"

import Navbar from "./nav"

const headerCss = css`
  min-height: ${sizes.headerHeight};
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3 {
    margin-left: 5rem;
  }
  @media (${below.tablet}) {
    h3 {
      margin-left: 0;
      margin-right: auto;
      font-size: ${sizes.h4};
    }
  }
`

const Header = (): JSX.Element => (
  <header css={headerCss}>
    <h3>
      <Link href="/">
        <a>{transform("Sick movies")}</a>
      </Link>
    </h3>
    <Navbar />
  </header>
)

export default Header

const transform = (input: string) =>
  input.split("").map((s) => {
    if (s.match(/\s/g)) {
      return " "
    }
    return (
      <motion.span
        key={cuid()}
        css={css`
          display: inline-block;
        `}
        whileHover={{
          scale: 1.1,
          zIndex: 2,
          x: 3,
          y: 1,
          color: colorsMain.highlight,
        }}
      >
        {s}
      </motion.span>
    )
  })
