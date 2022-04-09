import React, { useReducer } from 'react'

type Action = { type: string; payload: string }
type Dispatch = (action: Action) => void
type State = { text: string }

export const TextContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined)

const initialState = {
  text: '',
}

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'UPDATE_TEXT':
      return {
        text: action.payload,
      }
    default:
      return state
  }
}

export const Provider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <TextContext.Provider value={{ state, dispatch }}>
      {props.children}
    </TextContext.Provider>
  )
}
