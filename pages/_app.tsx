import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client"
import Layout from "@components/app/layout"
import type {AppProps} from "next/app"

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "/api",
})

function MyApp({Component, pageProps}: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}
export default MyApp
