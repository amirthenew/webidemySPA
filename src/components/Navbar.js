import React ,{useRef,useState,useEffect}from "react";
import styles from './Navbar.module.css'
import logo from '../images/logo.png'
import { Link } from "react-router-dom";
import HamburgerIcon from "./HamburgerIcon";
import HamburgerMenuOpen from './HamburgerMenuOpen'
import HamburgerMenuClose from './HambugerMenuClose'
const Navbar = ()=>{

    // const menuFirstCondition = useRef();

    useEffect(()=>{
        setItOpen(!isOpen)
        // menuFirstCondition.current.display = 'none'
    },[])


    const[isOpen,setItOpen]=useState(false)
    const handleClick = ()=>{
        setItOpen(!isOpen)
    }


return(<div className={styles.maindiv}>
    <header className={styles.header}>
    <div className={styles.logo}>
    <img alt="webidemylogo" src={logo}/>
    </div>
    <div className={styles.listContainer}>
    <ul className={styles.list}>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/products'>Product</Link></li>
    <li><Link to='/aboutus'>About Us</Link></li>
    <li><Link to='/contactus'>Contact Us</Link></li>
    </ul>
    </div>
    <HamburgerIcon handleClick={handleClick} isOpen={isOpen}/>
    </header>
    <div className={styles.container}>
        {isOpen ? (    
<HamburgerMenuOpen handleClick={handleClick} isOpen={isOpen}/>) : 
<HamburgerMenuClose  handleClick={handleClick} isOpen={isOpen} setItOpen={setItOpen}/>

        
        }
        </div>
    </div>
    

)

}

export default Navbar