import React from 'react';
import styles from './Footer.module.css'
import logo from '../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
const Footer = () => {

    const emailIcon = <FontAwesomeIcon icon={faEnvelope}/>


    return ( <div className={styles.container}>
        <div className={styles.footerbox}>
<div className={styles.firstbox}>
<h3>About us</h3>
<br/>
<div className={styles.logobar}>
<img style={{width:'50px'}} src={logo}/>
<span>webidemy.com</span>
</div>
<div className={styles.line}></div>
<div className={styles.iconbox}>
<span className={styles.mailicon}>{emailIcon}</span>
<span className={styles.mailicon}>{emailIcon}</span>
<span className={styles.mailicon}>{emailIcon}</span>
</div>

</div>
<div className={styles.secondbox}>

<ul>
<li>home</li>
<li>blog</li>
<li>aboutus</li>
<li>contact us</li>
</ul>
</div>
<div className={styles.thirdbox}>

<ul>
<li>home</li>
<li>blog</li>
<li>aboutus</li>
<li>contact us</li>
</ul>
</div>
        </div>
<div className={styles.copyrightbar}>
<p> &copy; All Rights Reserved by Webidemy 2022</p></div>

        
        </div> );
}
 
export  default Footer;