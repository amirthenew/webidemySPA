import React, { useState } from 'react';
import styles from './HamburgerMenu.module.css'
import HamburgerIcon from './HamburgerIcon';

const HamburgerMenu = () => {

    const[isOpen,setItOpen]=useState(false)
    const handleClick = ()=>{
        setItOpen(!isOpen)
    }

    return ( <div className={styles.container}>
        <HamburgerIcon handleClick={handleClick}/>
        
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