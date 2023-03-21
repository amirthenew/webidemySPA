import React ,{useState} from "react"
import styles from './Cards.module.css'
import Card from "./Card";
import post1 from '../images/1.jpg'
import post2 from '../images/2.jpg'
import post3 from '../images/3.jpg'
import post4 from '../images/4.jpg'


const Cards = () => {

    const [postData,postDataSet] = useState([
        {id :1 ,image :post1,name:'post1', cost:'500$' },
        {id :2 ,image :post2,name:'post2', cost:'200$' },
        {id :3 ,image :post3,name:'post3', cost:'100$' },
        {id : 4,image :post4,name:'post4', cost:'40$' }
    ])

    return ( <div className={styles.container}>


        {postData.map(post =>
        <Card 
        key={post.id} 
        image={post.image} 
        name={post.name} 
        cost={post.cost}
        />
        
        )}
                </div> );
}
 
export default Cards;





