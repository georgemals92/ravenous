import styles from './SearchBar.module.css'


export default function SearchBar() {
    return(
        <div className={styles.container}>
            <div className={styles.searchOptions}>
                    <input type="radio" name="search-by" id="best-match" checked />
                    <label for="best-match">Best Match</label>
                    <input type="radio" name="search-by" id="highest-rated" />
                    <label for="highest-rated">Highest Rating</label>
                    <input type="radio" name="search-by" id="most-reviewed" />
                    <label for="most-reviewed">Most Reviewed</label>
            </div>  
            <div className={styles.searchContainer}>
                <input type="text" />
                <input type="text" />
            </div>
            <button>Let's Go</button>
        </div>
    );
}