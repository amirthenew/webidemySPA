import React, { useState } from 'react';
import styles from './HamburgerMenu.module.css';
import { Link } from 'react-router-dom';

const HamburgerMenu = () => {

    const[isOpen,setItOpen]=useState(false)
    const handleClick = ()=>{
        setItOpen(!isOpen)
    }

    return ( <div className={styles.container}>
        
        {isOpen && (
            
<div className={styles.menubox}>
<ul className={styles.dropdownmenu}>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/products'>Product</Link></li>
    <li><Link to='/aboutus'>About Us</Link></li>
    <li><Link to='/'>Contact Us</Link></li>
</ul>
</div>
            )}

        </div> );
}
 
export default HamburgerMenu;