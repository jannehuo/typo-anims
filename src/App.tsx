import React from 'react'
import TextInput from './components/TextInput'
import AnimationContainer from './components/AnimationContainer'
import './css/app.css'

function App() {
  return (
    <div className='App'>
      <div className='user-input-container'>
        <TextInput />
      </div>
      <div className='animation-container'>
        <AnimationContainer />
      </div>
    </div>
  )
}

export default App
