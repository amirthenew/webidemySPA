//class component

import React,{useState} from 'react';
import styles from './Search.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import Typewriter from "typewriter-effect";


const Search = () => {
    const searchIcon = <FontAwesomeIcon icon={faSearch}/>

    const [changed,setChange] = useState('')

    const changeHandler = (e)=>{
        setChange(e.target.value)

        }
   
    return (  <div className={styles.container}>
            <span className={styles.animatedtext}>
            <Typewriter
            options={
              {
                strings : ['looking for what ?' , 'search it !'],
                autoStart:true,
                loop : true,
          
              }
            }
          
             
      
      
            /> 
            </span>

        <div className={styles.searchbox}>
        <input type='text' value={changed} onChange={changeHandler} placeholder='search it !'/>
        <button className={styles.Button}><span className={styles.searchIcon}>{searchIcon}</span></button>



        </div>
        </div> );


    }
   

 
export default Search;