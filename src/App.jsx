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

  const valueForMoneyFilter = business => 
        (business.price === '\u20ac' || business.price === '\u20ac\u20ac') && parseFloat(business.rating) >= 4;

  const openNowFilter = business => 
        (!business.isClosed);

  // For testing purposes: To check if data where successfully transformed from the fetchBusinessData function
  console.log(`App component state:`, businessData);



  return (
    <>
      <SearchBar getBusinessData = {getBusinessData}/> {/* Function is passed as a prop to update state of the parent component from search component*/}
      <BusinessList businessData = {businessData} title="All options in your region"/>
      <BusinessList businessData = {businessData} filteringOption={valueForMoneyFilter} title="Value for money"/>
      <BusinessList businessData = {businessData} filteringOption={openNowFilter} title="Open right now"/>
      
    </>
  );
}

export default App