import {AnimatePresence} from "framer-motion"
import React from "react"

interface Props {
  isOn: boolean
  exitBeforeEnter?: boolean
}

const AnimateWrapper: React.FC<Props> = ({isOn, children, exitBeforeEnter = true}) => {
  return <AnimatePresence exitBeforeEnter={exitBeforeEnter}>{isOn && children}</AnimatePresence>
}
export default AnimateWrapper
