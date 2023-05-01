//class component

import React,{useState} from 'react';
import styles from './Search.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

const Search = () => {
    const searchIcon = <FontAwesomeIcon icon={faSearch}/>

    const [changed,setChange] = useState('')

    const changeHandler = (e)=>{
        setChange(e.target.value)

        }
   
    return (  <div className={styles.container}>
            
        <p>looking for ?</p>
        <div>
        <input type='text' value={changed} onChange={changeHandler} placeholder='search it !'/>
        <button><span className={styles.searchIcon}>{searchIcon}</span></button>



        </div>
        </div> );


    }
   

 
export default Search;