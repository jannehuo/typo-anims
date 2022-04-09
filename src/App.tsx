import React from 'react'
import TextInput from './components/TextInput'
import AnimationContainer from './components/AnimationContainer'
import { Provider } from './context/textContext'
import './css/app.css'

function App() {
  return (
    <Provider>
      <div className='App'>
        <div className='user-input-container'>
          <TextInput />
        </div>
        <div className='animation-container'>
          <AnimationContainer />
        </div>
      </div>
    </Provider>
  )
}

export default App
