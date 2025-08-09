import { useState } from 'react';
import styles from './SearchBar.module.css'


export default function SearchBar(props) {

    const [term, setTerm] = useState('');
    const [location, setLocation] = useState('');
    const [searchByOption, setSearchByOption] = useState('best_match');

    const handleLocationChange = (e) => {
        const newLocation = e.target.value;
        setLocation(newLocation);
    };

    const handleTermChange = (e) => {
        const newTerm = e.target.value;
        setTerm(newTerm);
    };

    const handleSearchByChange = (e) => {
        const newSearchByOption = e.target;
        setSearchByOption(newSearchByOption.id);
        newSearchByOption.checked = true;
    };
     
    const handleSubmit = (e) => {
        e.preventDefault();
        props.getBusinessData(location, term, searchByOption);
        // For testing purposes: To confirm successful form submission and search parameters. 
        console.log(`Sent request to YELP API: Location: ${location}, Business: ${term}, Sorting option: ${searchByOption}`); //for testing
    };

    return(
        <>
            <header>ravenous</header>
            <form className={styles.wrapper} onSubmit={handleSubmit}>
                <fieldset className={styles.searchOptions}>
                    {/*Input IDs match the Yelp API search parameters for sort_by - API reference here: https://docs.developer.yelp.com/reference/v3_business_search*/}
                    <input type="radio" name="search-by" id="best_match" defaultChecked onClick={handleSearchByChange}/>
                    <label htmlFor="best_match">Best Match</label>
                    <input type="radio" name="search-by" id="rating" onClick={handleSearchByChange}/>
                    <label htmlFor="rating">Highest Rating</label>
                    <input type="radio" name="search-by" id="review_count" onClick={handleSearchByChange}/>
                    <label htmlFor="review_count">Most Reviewed</label>
                </fieldset>  
                <div className={styles.searchContainer}>
                    <input type="text" placeholder='Search for businesses' id="search-business" onChange={handleTermChange}/>
                    <input type="text" placeholder='Where?' id="search-location" onChange={handleLocationChange}/>
                </div>
                <button type='submit'>Let's Go</button>
            </form>
        </>
    );
}

