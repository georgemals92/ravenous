import { useState } from 'react'
import './App.css'
import BusinessList from './components/businessList/BusinessList.jsx'
import SearchBar from './components/searchBar/SearchBar.jsx'
import fetchBusinessData from './utils/fetchBusinessData.js';

function App() {
  const [businessData, setBusinessData] = useState([]);

  const getBusinessData = async (location, term, searchByOption) => {
    setBusinessData(await fetchBusinessData(location, term, searchByOption));
  };

  console.log(businessData);

  return (
    <>
      <SearchBar getBusinessData = {getBusinessData}/>
      <BusinessList businessData = {businessData}/>
    </>
  );
}

export default App