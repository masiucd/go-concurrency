import {css} from "@emotion/react"
import styled from "@emotion/styled"
import {sizes} from "@styles/styles"
import {motion} from "framer-motion"
import Link from "next/link"

const NavItem = styled(motion.li)``

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
      <Navbar />
    </header>
  )
}

const Navbar = () => {
  return (
    <nav
      css={css`
        flex: 1;
        margin-left: auto;
        height: 100%;
      `}
    >
      <ul
        css={css`
          max-width: 16rem;
          display: flex;
          margin-left: auto;
          justify-content: space-evenly;
          li {
            font-size: 1.2rem;
          }
        `}
      >
        <NavItem whileHover={{opacity: 0.7, letterSpacing: ".065cm"}}>
          <Link href="/login">
            <a>login</a>
          </Link>
        </NavItem>
        <NavItem whileHover={{opacity: 0.7, letterSpacing: ".065cm"}}>
          <Link href="/signup">
            <a>sign up</a>
          </Link>
        </NavItem>
      </ul>
    </nav>
  )
}

export default Header
