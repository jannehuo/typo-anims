import React, { useState } from 'react'

const TextInput = () => {
  const [textValue, setTextValue] = useState('')

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextValue(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(textValue)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='input-container'>
        <label htmlFor='text-input'>Text</label>
        <input
          type='text'
          id='text-input'
          value={textValue}
          onChange={handleInput}
        />
      </div>
      <div className='input-container'>
        <input type='submit' value='animate text' />
      </div>
    </form>
  )
}

export default TextInput
