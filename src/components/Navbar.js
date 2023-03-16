import React from "react";
import styles from './Navbar.module.css'
import logo from '../images/logo.png'
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import HamburgerIcon from "./HamburgerIcon";
const Navbar = ()=>{

return(<div>
    <header className={styles.header}>
    <div className={styles.logo}>
    <img alt="webidemylogo" src={logo}/>
    </div>
    <div className={styles.listContainer}>
    <ul className={styles.list}>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/products'>Product</Link></li>
    <li><Link to='/aboutus'>About Us</Link></li>
    <li><Link to='/'>Contact Us</Link></li>
    </ul>
    </div>
    <HamburgerIcon/>
    </header>
    <HamburgerMenu handleClick={handleClick} />
    </div>
    

)

}

export default Navbar