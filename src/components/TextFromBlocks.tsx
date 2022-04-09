import { useContext } from 'react'
import { TextContext } from '../context/textContext'

const TextFromBlocks = () => {
  const context = useContext(TextContext)
  return <h1>{context?.state.text}</h1>
}

export default TextFromBlocks
