import React, { useState } from 'react';
import styles from './HamburgerMenuOpen.module.css';
import { Link } from 'react-router-dom';

const HamburgerMenuOpen = (props) => {

    return ( 
<div className={styles.container}>
<div className={styles.menubox}>
<ul className={styles.dropdownmenu}>
<Link onClick={props.handleClick} className={styles.Link} to='/'><li className={styles.hamLi}>Home</li></Link>
<Link onClick={props.handleClick} className={styles.Link} to='/products'><li className={styles.hamLi}>Products</li></Link>
<Link onClick={props.handleClick} className={styles.Link} to='/aboutus'><li className={styles.hamLi}>About Us</li></Link>
<Link onClick={props.handleClick} className={styles.Link} to='/'><li className={styles.hamLi}>Contact Us</li></Link>
</ul>

{console.log('dropdown')}

</div>
        </div> )}
        
export default HamburgerMenuOpen;