import React, { useState } from 'react';
import styles from './HamburgerMenuOpen.module.css';
import { Link } from 'react-router-dom';

const HamburgerMenuClose = (props) => {
    const {handleClick,isOpen,setItOpen} = props




    return ( 
        <div className={styles.menubox}>
        <ul className={styles.dropupmenu}>
        <Link onClick={handleClick} className={styles.Link} to='/'><li className={styles.hamLi}>Home</li></Link>
        <Link onClick={handleClick} className={styles.Link} to='/blog'><li className={styles.hamLi}>Blog</li></Link>
        <Link onClick={handleClick} className={styles.Link} to='/aboutus'><li className={styles.hamLi}>About Us</li></Link>
        <Link onClick={handleClick} className={styles.Link} to='/contactus'><li className={styles.hamLi}>Contact Us</li></Link>
        </ul>
    </div> )}
export default HamburgerMenuClose;