import {css, SerializedStyles} from "@emotion/react"
import styled from "@emotion/styled"
import {colorsMain} from "@styles/styles"
import {motion} from "framer-motion"
import {createPortal} from "react-dom"
interface DialogProps {
  closeHandler: () => void
  title: string
  incomingStyles?: SerializedStyles
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
`

const Body = styled(motion.div)`
  background-color: ${colorsMain.text};
  color: ${colorsMain.bg2};
`

const Dialog: React.FC<DialogProps> = ({closeHandler, title, children, incomingStyles}) => {
  return createPortal(
    <Overlay role="dialog" tabIndex={-1}>
      <Body
        css={css`
          ${incomingStyles};
        `}
      >
        {children}
      </Body>
    </Overlay>,

    document.getElementById("portal") as HTMLDivElement
  )
}
export default Dialog
