import { TextContext } from '../context/textContext'
import React, { useContext } from 'react'
import '../css/textInput.css'

const TextInput = () => {
  const context = useContext(TextContext)

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    context?.dispatch({
      type: 'UPDATE_TEXT',
      payload: e.target.value,
    })
  }

  return (
    <div className='input-container'>
      <label htmlFor='text-input'>Write something!</label>
      <textarea
        id='text-input'
        value={context?.state.text}
        onChange={handleInput}
      ></textarea>
    </div>
  )
}

export default TextInput
