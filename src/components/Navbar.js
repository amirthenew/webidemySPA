import React ,{useState}from "react";
import styles from './Navbar.module.css'
import logo from '../images/logo.png'
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import HamburgerIcon from "./HamburgerIcon";
const Navbar = ()=>{

    const[isOpen,setItOpen]=useState(false)
    const handleClick = ()=>{
        setItOpen(!isOpen)
        console.log('ok');
    }

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
    <HamburgerIcon handleClick={handleClick}/>
    </header>
    <div className={styles.container}>
        {isOpen && (    
<div className={styles.menubox}>
<ul className={styles.dropdownmenu}>
    <li className={styles.hamLi}><Link className={styles.Link} to='/'>Home</Link></li>
    <li className={styles.hamLi}><Link className={styles.Link} to='/products'>Product</Link></li>
    <li className={styles.hamLi}><Link className={styles.Link} to='/aboutus'>About Us</Link></li>
    <li className={styles.hamLi}><Link className={styles.Link} to='/'>Contact Us</Link></li>
</ul>
</div>
            )}
        </div>
    </div>
    

)

}

export default Navbar