import styles from './BusinessList.module.css'
import Business from '../business/Business.jsx'

const businessData =[
    {
        image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg",
        name: "MarginOtto Pizza",
        address: "1010 Paddington Way",
        city: "Bordertown",
        state: "NY",
        zipCode: 10101,
        category: "Italian",
        rating: 4.5,
        reviewCount: 90
    }, 
    {
        image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg",
        name: "MarginOtto Pizza",
        address: "1011 Paddington Way",
        city: "Bordertown",
        state: "NY",
        zipCode: 10102,
        category: "Italian",
        rating: 4.5,
        reviewCount: 90
    },
    {
        image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg",
        name: "MarginOtto Pizza",
        address: "1012 Paddington Way",
        city: "Bordertown",
        state: "NY",
        zipCode: 10103,
        category: "Italian",
        rating: 4.5,
        reviewCount: 90
    }, 
    {
        image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg",
        name: "MarginOtto Pizza",
        address: "1010 Paddington Way",
        city: "Bordertown",
        state: "NY",
        zipCode: 10101,
        category: "Italian",
        rating: 4.5,
        reviewCount: 90
    }, 
    {
        image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg",
        name: "MarginOtto Pizza",
        address: "1011 Paddington Way",
        city: "Bordertown",
        state: "NY",
        zipCode: 10102,
        category: "Italian",
        rating: 4.5,
        reviewCount: 90
    },
    {
        image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg",
        name: "MarginOtto Pizza",
        address: "1012 Paddington Way",
        city: "Bordertown",
        state: "NY",
        zipCode: 10103,
        category: "Italian",
        rating: 4.5,
        reviewCount: 90
    }, 
    {
        image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg",
        name: "MarginOtto Pizza",
        address: "1011 Paddington Way",
        city: "Bordertown",
        state: "NY",
        zipCode: 10102,
        category: "Italian",
        rating: 4.5,
        reviewCount: 90
    },
    {
        image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg",
        name: "MarginOtto Pizza",
        address: "1012 Paddington Way",
        city: "Bordertown",
        state: "NY",
        zipCode: 10103,
        category: "Italian",
        rating: 4.5,
        reviewCount: 90
    }
];


export default function BusinessList() {
    const listItems = businessData.map((business, index) => 
                {return <Business data={business} key={index} />}
            );

    console.log(listItems);
    return(
        <div className={styles.wrapper}>
            {listItems}
        </div>
    );
}

