import Capture from "@components/common/capture"
import styled from "@emotion/styled"
import type {NextPage} from "next"
import Head from "next/head"
import {Fragment} from "react"

const Wrapper = styled.ul`
  padding: 2rem 0;
`
const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Sick movies</title>
      </Head>
      <Wrapper>
        <Capture />
      </Wrapper>
    </Fragment>
  )
}

export default Home
