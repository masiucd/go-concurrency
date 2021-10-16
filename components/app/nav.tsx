import {css} from "@emotion/css"
import styled from "@emotion/styled"
import {motion} from "framer-motion"
import Link from "next/link"

const NavItem = styled(motion.li)`
  padding: 0.5rem;
`

const NavList = styled.ul`
  max-width: 16rem;
  display: flex;
  margin-left: auto;
  justify-content: space-evenly;
  li {
    font-size: 1.2rem;
  }
`

const Navbar = (): JSX.Element => (
  <nav
    css={css`
      flex: 1;
      margin-left: auto;
      height: 100%;
    `}
  >
    <NavList>
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
    </NavList>
  </nav>
)

export default Navbar
