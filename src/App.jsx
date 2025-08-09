import { useState } from 'react'
import './App.css'
import BusinessList from './components/businessList/BusinessList.jsx'
import SearchBar from './components/searchBar/SearchBar.jsx'
import fetchBusinessData from './utils/fetchBusinessData.js';

function App() {
  const [businessData, setBusinessData] = useState([]);

  const getBusinessData = async (location, term, searchByOption) => {
    // Requires fetching data - marked as async function
    setBusinessData(await fetchBusinessData(location, term, searchByOption));
  };

  // For testing purposes: To check if data where successfully transformed from the fetchBusinessData function
  console.log(businessData);

  return (
    <>
      <SearchBar getBusinessData = {getBusinessData}/> {/* Function is passed as a prop to update state of the parent component from search component*/}
      <BusinessList businessData = {businessData}/>
    </>
  );
}

export default App