import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BusinessList from './components/businessList/BusinessList.jsx'
import SearchBar from './components/searchBar/SearchBar.jsx'

function App() {
  const businessData =[
    {
        image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg",
        name: "MarginOtto Pizza",
        address: "1010 Paddington Way",
        city: "Bordertown",
        state: "NY",
        zipCode: 10101,
        category: "Italian",
        rating: 4.5,
        reviewCount: 90
    }, 
    {
        image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg",
        name: "MarginOtto Pizza",
        address: "1011 Paddington Way",
        city: "Bordertown",
        state: "NY",
        zipCode: 10102,
        category: "Italian",
        rating: 4.5,
        reviewCount: 90
    },
    {
        image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg",
        name: "MarginOtto Pizza",
        address: "1012 Paddington Way",
        city: "Bordertown",
        state: "NY",
        zipCode: 10103,
        category: "Italian",
        rating: 4.5,
        reviewCount: 90
    }, 
    {
        image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg",
        name: "MarginOtto Pizza",
        address: "1010 Paddington Way",
        city: "Bordertown",
        state: "NY",
        zipCode: 10101,
        category: "Italian",
        rating: 4.5,
        reviewCount: 90
    }, 
    {
        image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg",
        name: "MarginOtto Pizza",
        address: "1011 Paddington Way",
        city: "Bordertown",
        state: "NY",
        zipCode: 10102,
        category: "Italian",
        rating: 4.5,
        reviewCount: 90
    },
    {
        image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg",
        name: "MarginOtto Pizza",
        address: "1012 Paddington Way",
        city: "Bordertown",
        state: "NY",
        zipCode: 101031,
        category: "Italian",
        rating: 4.5,
        reviewCount: 90
    }, 
    {
        image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg",
        name: "MarginOtto Pizza",
        address: "1011 Paddington Way",
        city: "Bordertown",
        state: "NY",
        zipCode: 10102,
        category: "Italian",
        rating: 4.5,
        reviewCount: 90
    },
    {
        image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg",
        name: "MarginOtto Pizza",
        address: "1012 Paddington Way",
        city: "Bordertown",
        state: "NY",
        zipCode: 10103,
        category: "Italian",
        rating: 4.5,
        reviewCount: 90
    }
];

  return (
    <>
      <SearchBar />
      <BusinessList businessData = {businessData}/>
    </>
  );
}

export default App


/*

const baseUrl = "'https://api.yelp.com/v3/businesses/search?"
const term = encodeURIComponent(' ');
const location = encodeURIComponent(' ');
const sortByOption = ["best-match", "highest-rated", "most-reviewed"];
const queryParams = `location=${term}&term=${term}&sort_by=${sortByOption}`;
const options = {method: 'GET', headers: {accept: 'application/json'}};


fetch('https://api.yelp.com/v3/businesses/search?location=new%20york&term=food&sort_by=best_match&limit=20', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));

*/