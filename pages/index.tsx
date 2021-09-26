import {css} from "@emotion/react"
import {motion} from "framer-motion"
import type {NextPage} from "next"
import Head from "next/head"
import Link from "next/link"
import {Fragment} from "react"

// import Image from "next/image"

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Sick movies</title>
      </Head>

      <Capture />
    </Fragment>
  )
}

export default Home

const TextPart = ({text}: {text: string}) => {
  return (
    <motion.h3
      initial={{x: 5}}
      whileHover={{
        fontWeight: 400,
        x: -4,
        letterSpacing: 0,
        zIndex: 22,
      }}
      transition={{
        duration: 0.2,
        damping: 3,
      }}
      css={css`
        font-weight: 900;
        font-size: 9rem;
        letter-spacing: 0.33cm;
        display: flex;
        padding: 0;
        height: 8rem;
        align-items: center;
        text-transform: capitalize;
      `}
    >
      <Link href={`/${text}`}>
        <a>{text}</a>
      </Link>
    </motion.h3>
  )
}
const Capture = () => {
  return (
    <div
      css={css`
        display: flex;
        flex-flow: column wrap;
        max-width: 500px;
        margin-top: 3rem;
        min-height: 34rem;
        justify-content: center;
      `}
    >
      <TextPart text="movies" />
      <TextPart text="about" />
      <TextPart text="contact" />
    </div>
  )
}
