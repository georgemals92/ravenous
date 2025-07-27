import styles from './Business.module.css'


export default function Business(props) {
    return(
        <div className= {styles.businessCard}>
            <img
                className = {styles.cardImage} 
                src= {props.data.image}
            />
            <h1 className = {styles.businessTitle}>{props.data.name}</h1>
            <p>{props.data.address}</p>
            <p>{props.data.city}</p>
            <p>{props.data.state}</p>
            <p>{props.data.zipcode}</p>
            <p>{props.data.category}</p>
            <p>{props.data.rating}</p>
            <p>{props.data.reviewCount}</p>
        </div>
    );
}