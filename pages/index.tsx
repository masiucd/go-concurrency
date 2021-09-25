import {useQuery} from "@apollo/client"
import Capture from "@components/image/capture"
import gql from "graphql-tag"
import type {NextPage} from "next"
import Head from "next/head"
<<<<<<< HEAD
import {Fragment} from "react"
=======
import {FC, Fragment} from "react"

>>>>>>> d9bee2df97830fb5c2f067a679c48a8d1a60932a
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
<<<<<<< HEAD
      <Capture />
=======

      <Title>
        <h1>Welcome to sick movies</h1>
      </Title>
>>>>>>> d9bee2df97830fb5c2f067a679c48a8d1a60932a
    </Fragment>
  )
}

export default Home
