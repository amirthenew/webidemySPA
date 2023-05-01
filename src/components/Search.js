//class component

import React,{useState} from 'react';
import styles from './Search.module.css'

const Search = () => {

    const [changed,setChange] = useState('')

    const changeHandler = (e)=>{
        setChange(e.target.value)

        }
   
    return (  <div className={styles.container}>
            
        <p>looking for ?</p>
        <div>
        <input type='text' value={changed} onChange={changeHandler} placeholder='search it !'/>
        <br/>
<span>{changed}</span>      
        </div>
        </div> );


    }
   

 
export default Search;