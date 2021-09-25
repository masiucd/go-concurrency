import {useQuery} from "@apollo/client"
import {css} from "@emotion/react"
import {motion} from "framer-motion"
import gql from "graphql-tag"
import type {NextPage} from "next"
import Head from "next/head"
import {FC, Fragment} from "react"

// import Image from "next/image"

const MOVIES_QUERY = gql`
  query movies {
    movies {
      title
      rating
      releaseYear
      comments {
        text
      }
    }
  }
`

interface TitleProps {
  title?: string
}
const Title: FC<TitleProps> = ({children, title}) => {
  return <Fragment>{title ? <h1>{title}</h1> : children}</Fragment>
}

const Home: NextPage = () => {
  const {data, error, loading} = useQuery(MOVIES_QUERY, {fetchPolicy: "cache-and-network"})

  if (loading) {
    return <div>Loading ...</div>
  }
  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <Fragment>
      <Head>
        <title>Sick movies</title>
      </Head>

      <Title>
        <h1>Welcome to sick movies</h1>
      </Title>
      <Capture />
    </Fragment>
  )
}

export default Home

const TextPart = ({text}: {text: string}) => {
  return (
    <motion.h3
      initial={{x: 15}}
      whileHover={{
        fontWeight: 400,
        x: -4,
        letterSpacing: 0,
      }}
      transition={{
        duration: 0.2,
      }}
      css={css`
        width: 70%;

        font-weight: 900;
        font-size: 8rem;
        letter-spacing: 0.53cm;
      `}
    >
      {text}
    </motion.h3>
  )
}
const Capture = () => {
  return (
    <div>
      <TextPart text="Movies" />
      <TextPart text="About" />
      <TextPart text="Contact" />
    </div>
  )
}
