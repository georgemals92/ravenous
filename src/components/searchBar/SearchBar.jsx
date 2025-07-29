import styles from './SearchBar.module.css'


export default function SearchBar() {
    return(
        <div className={styles.wrapper}>
            <div className={styles.searchOptions}>
                    <input type="radio" name="search-by" id="best-match" checked />
                    <label htmlFor="best-match">Best Match</label>
                    <input type="radio" name="search-by" id="highest-rated" />
                    <label htmlFor="highest-rated">Highest Rating</label>
                    <input type="radio" name="search-by" id="most-reviewed" />
                    <label htmlFor="most-reviewed">Most Reviewed</label>
            </div>  
            <div className={styles.searchContainer}>
                <input type="text" placeholder='Search for businesses' id="search-business" />
                <input type="text" placeholder='Where?' id="search-location"/>
            </div>
            <button>Let's Go</button>
        </div>
    );
}

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