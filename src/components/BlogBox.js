import React from 'react';
import styles from './BlogBox.module.css';
import { Link } from 'react-router-dom';


const BlogBox = (props) => {

    
const {id,title,desc,date,src} = props


    return ( 
<div><div className={styles.blogcontainer}>



        <h2>{id}</h2>
        <h2>{title}</h2>
        <span>{date}</span>
        



<img style={{width:'70px',padding:'1rem'}} src={src}/>

     <p>
       {desc}
        </p>
        <Link to='/blog/blog1'><span>Read more ...</span></Link>
        </div>
        <br/></div>
        
     );
}
 
export default BlogBox;