import {css} from "@emotion/react"
import styled from "@emotion/styled"
import {colorsMain, sizes} from "@styles/styles"
import {motion} from "framer-motion"

export const resetBtnStyles = css`
  border: 0;
  margin: 0;
  padding: 0;
  outline: 0;
  border-radius: 3px;
  cursor: pointer;
  :disabled {
    opacity: 0.5;
    color: #fff;
  }
`

export const ButtonPrimary = styled(motion.button)`
  ${resetBtnStyles};
  font-size: ${sizes.button};
  padding: 0.35rem;
  border: 2px solid ${colorsMain.highlight};
  background-color: transparent;
  color: ${colorsMain.text};
  height: 2.5rem;
  width: 7rem;
`
