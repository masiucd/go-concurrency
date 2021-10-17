import AnimateWrapper from "@components/common/animate.wrapper"
import Dialog from "@components/common/dialog"
import React from "react"

interface Props {
  open: boolean
  toggle: () => void
}

const LeaveReview: React.FC<Props> = ({open, toggle}) => {
  return (
    <AnimateWrapper isOn={open}>
      <Dialog title="Leave a review" closeHandler={toggle}>
        asdasd
      </Dialog>
    </AnimateWrapper>
  )
}
export default LeaveReview
