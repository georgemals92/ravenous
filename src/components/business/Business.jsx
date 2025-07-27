import styles from './Business.module.css'

const businessData = {
    image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg",
    name: "MarginOtto Pizza",
    address: "1010 Paddington Way",
    city: "Bordertown",
    state: "NY",
    zipcode: 10101,
    category: "Italian",
    rating: 4.5,
    reviewCount: 90 
};

export default function Business() {
    return(
        <div className= {styles.businessCard}>
            <img
                className = {styles.cardImage} 
                src= {businessData.image}
            />
            <h1 className = {styles.businessTitle}>{businessData.name}</h1>
            <p>{businessData.address}</p>
            <p>{businessData.city}</p>
            <p>{businessData.state}</p>
            <p>{businessData.zipcode}</p>
            <p>{businessData.category}</p>
            <p>{businessData.rating}</p>
            <p>{businessData.reviewCount}</p>
        </div>
    );
}