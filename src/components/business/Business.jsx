import styles from './Business.module.css'


export default function Business(props) {
    return(
        <div className= {styles.businessCard}>
            <img
                className = {styles.cardImage} 
                src= {props.data.image}
            />
            <h1 className = {styles.businessTitle}>{props.data.name}</h1>
            <div className={styles.cardBody}>
                <div className = {styles.addressInfo}>
                    <p>{props.data.address}</p>
                    <p>{props.data.city}</p>
                    <div>
                        <span>{props.data.state}</span>
                        <span>{props.data.zipCode}</span>
                    </div>
                </div>
                <div className={styles.ratingInfo}>
                    <p className= {styles.category}>{props.data.category}</p>
                    <p className= {styles.rating}>{props.data.rating} stars</p>
                    <p>{props.data.reviewCount} reviews</p>
                </div>
            </div>
        </div>
    );
}