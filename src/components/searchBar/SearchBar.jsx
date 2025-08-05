import { useState } from 'react';
import styles from './SearchBar.module.css'


export default function SearchBar() {

    const [term, setTerm] = useState('');
    const [location, setLocation] = useState('');
    const [searchByOption, setSearchByOption] = useState('best-match');

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
        alert(`Sent request to YELP API: Business: ${term}, Location: ${location}, Search by: ${searchByOption}`); //for testing
    };

    return(
        <form className={styles.wrapper} onSubmit={handleSubmit}>
            <fieldset className={styles.searchOptions}>
                <input type="radio" name="search-by" id="best-match" defaultChecked onClick={handleSearchByChange}/>
                <label htmlFor="best-match">Best Match</label>
                <input type="radio" name="search-by" id="highest-rated" onClick={handleSearchByChange}/>
                <label htmlFor="highest-rated">Highest Rating</label>
                <input type="radio" name="search-by" id="most-reviewed" onClick={handleSearchByChange}/>
                <label htmlFor="most-reviewed">Most Reviewed</label>
            </fieldset>  
            <div className={styles.searchContainer}>
                <input type="text" placeholder='Search for businesses' id="search-business" onChange={handleTermChange}/>
                <input type="text" placeholder='Where?' id="search-location" onChange={handleLocationChange}/>
            </div>
            <button type='submit'>Let's Go</button>
        </form>
    );
}

