import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Business from './components/business/business.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Business />
      <Business />
      <Business />
    </>
  )
}

export default App
