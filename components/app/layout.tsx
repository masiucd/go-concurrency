import GlobalStyles from "@components/styles/global.styles"
import {css} from "@emotion/react"
import {sizes} from "@styles/styles"
import {FC, Fragment} from "react"

import Footer from "./footer"
import Header from "./header"

const Layout: FC = ({children}) => (
  <Fragment>
    <GlobalStyles />
    <Header />
    <main
      css={css`
        max-width: ${sizes.maxWidth};
        margin: 1rem auto;
        min-height: calc(100vh - 22rem);
      `}
    >
      {children}
    </main>
    <Footer />
  </Fragment>
)

export default Layout
