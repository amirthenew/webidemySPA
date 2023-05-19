import React,{useState} from 'react';
import BlogBox from './BlogBox';
import styles from './Blog.module.css'

const Blog = () => {

  const[blog,setBlog]=useState([
  {id:1,date:'1 dec 2023',title:'whats react',desc : ' its a long story i fell in website design 4 years ago I had a background in this profession and it was a reason that Ive been in this route for 4 years I was thinking on launch a startup in'},
  {id:2,date:'1 dec 2023',title:'whats Javascript',desc : ' lorem ipsum is lorem ipsum lorem ipsum'}])
    return (

      <div className={styles.maindiv}>

      <div className={styles.container}>
      <h2>Webidemy blog</h2>
      <p>
      This blog is the official source for the updates from the React team. Anything important, including release notes or deprecation notices, will be posted here first. You can also follow the @reactjs account on Twitter, but you won’t miss anything essential if you only read this blog.
      </p>
{blog.map(blog=>
  <BlogBox         
  id={blog.id} 
  date={blog.date}
  title={blog.title} 
  desc={blog.desc}/>

)}

</div>
      </div>


      );
}
 
export default Blog;