import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Events from './Components/Events'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Events/>
    </>
  )
}

export default App
