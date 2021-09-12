import styled from "@emotion/styled"
import {FC, Fragment} from "react"

import Footer from "./footer"
import Header from "./header"

const Main = styled.main`
  /*  */
`

const Layout: FC = ({children}) => {
  return (
    <Fragment>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Fragment>
  )
}

export default Layout
