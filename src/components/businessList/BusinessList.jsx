import styles from './BusinessList.module.css'
import Business from '../business/Business.jsx'
import { useRef, useEffect } from 'react';

export default function BusinessList(props) {

    // To test if business data passed to component successfully through props
    console.log(`Data passed to business list component from props:`, props.title, props.businessData);
    
    // Filter data based on selected filtering option
    const filteredData = props.filteringOption ? props.businessData.filter(props.filteringOption) : props.businessData;
    

    // To test filtering of business data before passing on as card components
    console.log(`Business data after filtering:`, props.title, filteredData);
    
    const listItems = filteredData.map((business, index) => 
        <Business data={business} key={index} />
    );

    // For testing purposes to check if list items are mapped correctly
    console.log(`Business data for conversion to card component`, props.title, listItems);

    const wrapperRef = useRef(null);

    // Effect to reset the scrolling position of the card stream when component is re-rendered
    useEffect (() => {
        if(wrapperRef.current) {
            wrapperRef.current.scrollLeft = 0;
        }
    }, [props.businessData]);
    
    const handleScroll = (amount) => {
        if(wrapperRef.current) {
            wrapperRef.current.scrollBy({left: amount, behavior: "smooth"});
        }
    };


    return(
        <>
            <div className={styles.streamHeader}>
                <h3>{props.title}</h3>
                <div className={styles.buttonsContainer}>
                    <button onClick={() => handleScroll(-1120)}>&lt;</button>
                    <button onClick={() => handleScroll(1120)}>&gt;</button>
                </div>
            </div>
            <div className={styles.wrapper} ref={wrapperRef}>
                {listItems}
            </div>
        </>
    );
}

