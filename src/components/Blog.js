import React,{useState} from 'react';
import BlogBox from './BlogBox';
import styles from './BlogBox.module.css'

const Blog = () => {

  const[blog,setBlog]=useState([{id:1,title:'whats react',desc : ' its a long story i fell in website design 4 years ago I had a background in this profession and it was a reason that Ive been in this route for 4 years I was thinking on launch a startup in'},{id:2,title:'whats Javascript',desc : ' lorem ipsum is lorem ipsum lorem ipsum'}])
    return (
      
<div className={styles.container}>
{blog.map(blog=>
  <BlogBox         
  id={blog.id} 
  title={blog.title} 
  desc={blog.desc}/>

)}

</div>

      );
}
 
export default Blog;