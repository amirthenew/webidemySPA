import React, { useState,useEffect ,useRef} from 'react';
import styles from './HamburgerMenuOpen.module.css';
import { Link } from 'react-router-dom';

const HamburgerMenuOpen = (props) => {

    
const handleClick = props
    return ( 
<div className={styles.container}>
<div className={styles.menubox}>
<ul className={styles.dropdownmenu}>
<Link onClick={handleClick} className={styles.Link} to='/'><li className={styles.hamLi}>Home</li></Link>
<Link onClick={handleClick} className={styles.Link} to='/Blog'><li className={styles.hamLi}>Blog</li></Link>
<Link onClick={handleClick} className={styles.Link} to='/aboutus'><li className={styles.hamLi}>About Us</li></Link>
<Link onClick={handleClick} className={styles.Link} to='/contactus'><li className={styles.hamLi}>Contact Us</li></Link>
</ul>

{console.log('dropdown')}

</div>
        </div> )}
        
export default HamburgerMenuOpen;