import { useState } from 'react'
import './App.css'
import BusinessList from './components/businessList/BusinessList.jsx'
import SearchBar from './components/searchBar/SearchBar.jsx'
import getBusinessData from './utils/getBusinessData.js';

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
      <SearchBar getBusinessData = {getBusinessData}/>
      <BusinessList businessData = {businessData}/>
    </>
  );
}

export default App