import {css, SerializedStyles} from "@emotion/react"
import {colorsMain} from "@styles/styles"
import React from "react"

interface Props {
  title?: string
  titleStyles?: SerializedStyles
  titleWrapperStyles?: SerializedStyles
}

const Title: React.FC<Props> = ({children, titleStyles, title, titleWrapperStyles}) => {
  if (title) {
    return (
      <h1
        css={css`
          ${titleStyles};
        `}
      >
        {title}
      </h1>
    )
  }
  return (
    <section
      css={css`
        padding: 1rem;
        color: ${colorsMain.primary};
        opacity: 0.75;
        ${titleWrapperStyles};
      `}
    >
      {children}
    </section>
  )
}
export default Title
