import styles from './BusinessList.module.css'
import Business from '../business/Business.jsx'

export default function BusinessList(props) {
    const listItems = props.businessData.map((business, index) => 
                {return <Business data={business} key={index} />}
            );

    // for testing
    // console.log(listItems);
    return(
        <div className={styles.wrapper}>
            {listItems}
        </div>
    );
}

