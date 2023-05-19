import React from 'react';
import styles from './BlogBox.module.css';
import { Link } from 'react-router-dom';


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
        <Link to='/blog/blog1'><span>Read more ...</span></Link>
        </div>
        <br/></div>
        
     );
}
 
export default BlogBox;