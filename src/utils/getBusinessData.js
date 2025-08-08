const getBusinessData = async (location, term, sortByOption) => {
  const yelpRequestEndpoint = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/";
  const requestParams = `search?location=${encodeURIComponent(location)}&term=${encodeURIComponent(term)}&sort_by=${sortByOption}&limit=20`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      authorization: 'Bearer O9p8y3xo4eYBGO2UVrgCcAOKLqf13O2O_UIUuzI544T8xqIpQdCYMuIecE0Llh3Ag1MpIxkk0vGo-9yKwVCxO-cdFPbdYisFsZCISqYgKez4f6S-ul3jdgjRyp-TaHYx'
    }
  };

  const urlToFetch = `${yelpRequestEndpoint}${requestParams}`;
  

  fetch(urlToFetch, options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));
  
//   try {
//     const response = await fetch(urlToFetch, options);
//     if (response.ok) {
//       const jsonResponse = await response.json();
//       console.log(jsonResponse);
//       const businessData = jsonResponse.businesses;
//       return businessData;
//     }
//   } catch(error) {
//     console.log(error);
//   }
};

export default getBusinessData;

        // image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg",
        // name: "MarginOtto Pizza",
        // address: "1010 Paddington Way",
        // city: "Bordertown",
        // state: "NY",
        // zipCode: 10101,
        // category: "Italian",
        // rating: 4.5,
        // reviewCount: 90

  // "businesses"
  //   {
  //     "id": "xTwzk3lh7tE2GFiVQop1kg",
  //     "alias": "nubiani-new-york",
  //     "name": "Nubiani",
  //     "image_url": "https://s3-media0.fl.yelpcdn.com/bphoto/V19pkD6bkSpC3KABReFLyA/o.jpg",
  //     "is_closed": false,
  //     "url": "https://www.yelp.com/biz/nubiani-new-york?adjust_creative=756T4sOX5FwwzarU34nkDw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=756T4sOX5FwwzarU34nkDw",
  //     "review_count": 435,
  //     "categories": [
  //       {
  //         "alias": "korean",
  //         "title": "Korean"
  //       },
  //       {
  //         "alias": "bbq",
  //         "title": "Barbeque"
  //       }
  //     ],
  //     "rating": 4.5,
  //     "coordinates": {
  //       "latitude": 40.74700575561414,
  //       "longitude": -73.9854169149663
  //     },
  //     "transactions": [
  //       "pickup",
  //       "delivery"
  //     ],
  //     "location": {
  //       "address1": "315 5th Ave",
  //       "address2": "Fl 3",
  //       "address3": "",
  //       "city": "New York",
  //       "zip_code": "10016",
  //       "country": "US",
  //       "state": "NY",
  //       "display_address": [
  //         "315 5th Ave",
  //         "Fl 3",
  //         "New York, NY 10016"
  //       ]
  //     },
  //     "phone": "+19176230807",
  //     "display_phone": "(917) 623-0807",
  //     "distance": 4681.495589614488,
  //     "business_hours": [
  //       {
  //         "open": [
  //           {
  //             "is_overnight": false,
  //             "start": "1200",
  //             "end": "2300",
  //             "day": 0
  //           },
  //           {
  //             "is_overnight": false,
  //             "start": "1200",
  //             "end": "2300",
  //             "day": 1
  //           },
  //           {
  //             "is_overnight": false,
  //             "start": "1200",
  //             "end": "2300",
  //             "day": 2
  //           },
  //           {
  //             "is_overnight": false,
  //             "start": "1200",
  //             "end": "0000",
  //             "day": 3
  //           },
  //           {
  //             "is_overnight": true,
  //             "start": "1200",
  //             "end": "0100",
  //             "day": 4
  //           },
  //           {
  //             "is_overnight": true,
  //             "start": "1200",
  //             "end": "0100",
  //             "day": 5
  //           },
  //           {
  //             "is_overnight": false,
  //             "start": "1200",
  //             "end": "2300",
  //             "day": 6
  //           }
  //         ],
  //         "hours_type": "REGULAR",
  //         "is_open_now": true
  //       }
  //     ],
  //     "attributes": {
  //       "business_temp_closed": null,
  //       "menu_url": "https://www.nubianinyc.com/menu",
  //       "open24_hours": null,
  //       "waitlist_reservation": null
  //     }
  //   }