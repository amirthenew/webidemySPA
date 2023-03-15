import React, { useState } from 'react';
import styles from './HamburgerMenu.module.css'

const HamburgerMenu = () => {

    const[isOpen,setItOpen]=useState(false)
    const handleClick = ()=>{
        setItOpen(isOpen)
    }

    return ( <div className={styles.container}>

        <div className={styles.hamicon} onClick={handleClick}>
        <div></div>
        </div>

        </div> );
}
 
export default HamburgerMenu;