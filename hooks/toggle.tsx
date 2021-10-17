import {useMemo, useState} from "react"

interface Handlers {
  toggle: () => void
  toTrue: () => void
  toFalse: () => void
  reset: () => void
}
type UseToggle = [boolean, Handlers]

const useToggle = (initialState = false): UseToggle => {
  const [state, setState] = useState(initialState)

  const handlers = useMemo(
    () => ({
      toggle: (): void => {
        setState((p) => !p)
      },
      toTrue: (): void => {
        setState(true)
      },
      toFalse: (): void => {
        setState(false)
      },
      reset: () => {
        setState(initialState)
      },
    }),
    [initialState]
  )
  return [state, handlers]
}

export default useToggle
