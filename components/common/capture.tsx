import {css, SerializedStyles} from "@emotion/react"
import {colorsMain} from "@styles/styles"
import {motion} from "framer-motion"
import Link from "next/link"
import {useRouter} from "next/router"
import {FC} from "react"

const activeLink = (pathName: string, text: string): string => {
  if (pathName.replace(/[^a-z]/gi, "") === text) {
    return colorsMain.primary
  }

  return "white"
}

const TextPart = ({text}: {text: string}) => {
  const {pathname} = useRouter()
  return (
    <motion.h3
      className="text-part"
      initial={{x: 5}}
      whileHover={{
        opacity: 0.65,
        letterSpacing: "0.05cm",
        // color: colorsMain.highlight,
      }}
      transition={{
        duration: 0.2,
        damping: 5,
      }}
      css={css`
        text-transform: capitalize;
        font-size: 10rem;
        font-weight: bold;
        margin-left: 1rem;
        height: 13rem;
        color: ${activeLink(pathname, text)};
        a {
          display: flex;
        }
      `}
    >
      <Link href={`/${text}`}>
        <a>{text}</a>
      </Link>
    </motion.h3>
  )
}

interface Props {
  incomingStyles?: SerializedStyles
}
const Capture: FC<Props> = ({incomingStyles}) => (
  <div
    css={css`
      display: flex;
      flex-flow: column wrap;
      max-width: 500px;
      margin-top: 3rem;
      min-height: 34rem;
      justify-content: center;
      ${incomingStyles};
    `}
  >
    <TextPart text="movies" />
    <TextPart text="about" />
    <TextPart text="contact" />
  </div>
)

export default Capture
