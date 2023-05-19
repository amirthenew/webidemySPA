import React from 'react';
import styles from './BlogBox.module.css';


const BlogBox = (props) => {

    
const {id,title,desc} = props


    return ( 

        <div className={styles.container}>
        <h2>{id}</h2>
        <h2>{title}</h2>
        <p>
       {desc}
        </p>
        </div>
     );
}
 
export default BlogBox;