import styles from './BusinessList.module.css'
import Business from '../business/Business.jsx'
import { useRef, useEffect } from 'react';

export default function BusinessList(props) {
    
    const listItems = props.businessData.map((business, index) => 
    <Business data={business} key={index} />
    );

    // for testing
     console.log(listItems);

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
            <div className={styles.buttonsContainer}>
                <button onClick={() => handleScroll(-1120)}>&lt;</button>
                <button onClick={() => handleScroll(1120)}>&gt;</button>
            </div>
            <div className={styles.wrapper} ref={wrapperRef}>
                {listItems}
            </div>
        </>
    );
}

