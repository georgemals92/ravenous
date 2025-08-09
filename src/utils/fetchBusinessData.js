// Scope: Function to fetch data from the Yelp API and format to acceptable structure for the UI components. 

const fetchBusinessData = async (location, term, sortByOption) => {
  // https://cors-anywhere.herokuapp.com/corsdemo prepended to API endpoint to bypass CORS policy errors

  const yelpRequestEndpoint = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/";
  
  //Sort_by options directly formatted within searchbar component
  const requestParams = `search?location=${encodeURIComponent(location)}&term=${encodeURIComponent(term)}&sort_by=${sortByOption}&limit=50`;
  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      // Import from env file 
      // Used import.meta.env.api-key for client side usage 
      authorization: `Bearer ${import.meta.env.VITE_YELP_API_KEY}`
    }
  };

  // Structures the API endpoint, params and authentication in line with the Yelp search API v3 reference
  // https://docs.developer.yelp.com/reference/v3_business_search
  const urlToFetch = `${yelpRequestEndpoint}${requestParams}`;
  
  try {
    const response = await fetch(urlToFetch, options);
    if (response.ok){
      const jsonResponse = await response.json();
      if (!jsonResponse.businesses) return [];
      
      // For testing purposes: To check the response data
      await console.log(`Data fetched from API:`, jsonResponse.businesses);
      
      // Transforms response data to the businessData object structure for display by the card and listing components
      const businessData = jsonResponse.businesses.map((business) => {
      return { 
          image: business.image_url,
          name : business.name,
          address : business.location.address1,
          city : business.location.city,
          state : business.location.state,
          zipCode : business.location.zip_code,
          // Question mark to make chaining optional and display missing data without errors
          category : business.categories[0]?.title,
          rating : business.rating,
          reviewCount : business.review_count,
          price: business.price,
          isClosed: business.is_closed
        };
    });
    return businessData;

  }} catch(err) {
    console.error(err)
  };
};

export default fetchBusinessData;