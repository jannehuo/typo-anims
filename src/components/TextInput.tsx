import React, { useState } from 'react'
import '../css/textInput.css'

const TextInput = () => {
  const [textValue, setTextValue] = useState('')

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(e.target.value)
  }

  return (
    <div className='input-container'>
      <label htmlFor='text-input'>Text</label>
      <textarea
        id='text-input'
        value={textValue}
        onChange={handleInput}
      ></textarea>
    </div>
  )
}

export default TextInput
