const fetchBusinessData = async (location, term, sortByOption) => {
  // https://cors-anywhere.herokuapp.com/corsdemo
  const yelpRequestEndpoint = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/";
  const requestParams = `search?location=${encodeURIComponent(location)}&term=${encodeURIComponent(term)}&sort_by=${sortByOption}&limit=20`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      authorization: `Bearer ${import.meta.env.VITE_YELP_API_KEY}`
    }
  };

  const urlToFetch = `${yelpRequestEndpoint}${requestParams}`;
  
  try {
    const response = await fetch(urlToFetch, options);
    if (response.ok){
      const jsonResponse = await response.json();
      if (!jsonResponse.businesses) return [];
      
      console.log(jsonResponse.businesses);
      const businessData = jsonResponse.businesses.map((business) => {
      
      return { 
          image: business.image_url,
          name : business.name,
          address : business.location.address1,
          city : business.location.city,
          state : business.location.state,
          zipCode : business.location.zip_code,
          category : business.categories[0]?.title,
          rating : business.rating,
          reviewCount : business.review_count
        };
    });
    return businessData;

  }} catch(err) {
    console.error(err)
  };
};

export default fetchBusinessData;