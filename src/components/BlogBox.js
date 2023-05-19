import React from 'react';
import styles from './BlogBox.module.css';


const BlogBox = (props) => {

    
const {id,title,desc,date} = props


    return ( 
<div><div className={styles.blogcontainer}>
        <h2>{id}</h2>
        <h2>{title}</h2>
        <spam>{date}</spam>
        <p>
       {desc}
        </p>
       
        </div>
        <br/></div>
        
     );
}
 
export default BlogBox;