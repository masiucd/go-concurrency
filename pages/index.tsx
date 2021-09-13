import {useQuery} from "@apollo/client"
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
  console.log(data)

  return (
    <Fragment>
      <Head>
        <title>Sick movies</title>
      </Head>

      <Title>
        <h1>Welcome to sick movies</h1>
      </Title>
    </Fragment>
  )
}

export default Home
