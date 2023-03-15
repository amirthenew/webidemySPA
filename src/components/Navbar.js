import React from "react";
import styles from './Navbar.module.css'
import logo from '../images/logo.png'
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
const Navbar = ()=>{

return(
    <header className={styles.header}>
    <div className={styles.logo}>
    <img alt="webidemylogo" src={logo}/>
    </div>
    
    <HamburgerMenu/>
    <div className={styles.listContainer}>
    <ul className={styles.list}>
    
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/products'>Product</Link></li>
    <li><Link to='/aboutus'>About Us</Link></li>
    <li><Link to='/'>Contact Us</Link></li>
    </ul>
    </div>


    </header>
)

}

export default Navbar