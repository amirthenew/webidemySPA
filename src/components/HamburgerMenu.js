import React, { useState } from 'react';
import styles from './HamburgerMenu.module.css'

const HamburgerMenu = () => {

    const[isOpen,setItOpen]=useState(false)
    const handleClick = ()=>{
        setItOpen(!isOpen)
    }

    return ( <div className={styles.container}>

        <div className={styles.hamicon} onClick={handleClick}>
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
            <div className={styles.line3}></div>
        </div>
        {isOpen && (
            
            <ul className={styles.dropdownmenu}>
            <a href=''><li>item1</li></a>
            <a href=''><li>item2</li></a>
            <a href=''><li>item3</li></a>
            </ul>
            )}

        </div> );
}
 
export default HamburgerMenu;