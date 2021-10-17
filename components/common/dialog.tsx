import {css, SerializedStyles} from "@emotion/react"
import styled from "@emotion/styled"
import {above} from "@styles/media-query"
import * as styles from "@styles/styles"
import {colorsMain} from "@styles/styles"
import {motion} from "framer-motion"
import {createPortal} from "react-dom"

import {resetBtnStyles} from "./button"
interface DialogProps {
  closeHandler: () => void
  title: string
  incomingStyles?: SerializedStyles
}

const bodyVariants = {
  initial: {
    scale: 0.45,
    opacity: 0,
    y: "-50%",
  },

  animate: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {ease: "easeOut", duration: 0.45},
  },

  exit: {
    scale: 0.5,
    opacity: 0,
    transition: {duration: 0.15, delay: 0.1},
  },
}

const Overlay = styled(motion.div)`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Body = styled(motion.div)`
  background-color: ${styles.colorsMain.text};
  color: ${styles.colorsMain.bg};
  position: relative;
  border-radius: 4px;
  @media ${above.tablet} {
    min-height: 35rem;
    min-width: 35rem;
  }
`

const Top = styled.div`
  box-shadow: ${styles.elevations.md};
  padding: 0.5rem;
`

const Dialog: React.FC<DialogProps> = ({closeHandler, title, children, incomingStyles}) =>
  createPortal(
    <Overlay role="dialog" tabIndex={-1}>
      <Body
        variants={bodyVariants}
        initial={bodyVariants["initial"]}
        animate={bodyVariants["animate"]}
        exit={bodyVariants["exit"]}
        css={css`
          ${incomingStyles};
        `}
      >
        <Top>
          <h4>{title}</h4>
        </Top>
        {children}
        <motion.button
          whileHover={{color: colorsMain.highlight}}
          onClick={closeHandler}
          type="button"
          css={css`
            ${resetBtnStyles};
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
            font-size: 1.3rem;
          `}
        >
          ⤫
        </motion.button>
      </Body>
    </Overlay>,

    document.getElementById("portal") as HTMLDivElement
  )
export default Dialog
