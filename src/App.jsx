import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BusinessList from './components/businessList/BusinessList.jsx'
import SearchBar from './components/searchBar/SearchBar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SearchBar />
      <BusinessList />
    </>
  )
}

export default App
