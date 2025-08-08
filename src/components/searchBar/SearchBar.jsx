import { useState } from 'react';
import styles from './SearchBar.module.css'
import getBusinessData from '../../utils/getBusinessData';


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
        alert(`Sent request to YELP API: Business: ${term}, Location: ${location}, Search by: ${searchByOption}`); //for testing
    };

    return(
        <form className={styles.wrapper} onSubmit={handleSubmit}>
            <fieldset className={styles.searchOptions}>
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
    );
}

