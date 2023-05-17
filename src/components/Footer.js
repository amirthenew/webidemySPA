import React from 'react';

import { Link } from 'react-router-dom';
import styles from './Footer.module.css'
import logo from '../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'


const Footer = () => {

    const emailIcon = <FontAwesomeIcon icon={faEnvelope}/>
    const phoneIcon = <FontAwesomeIcon icon={faPhone}/>

    


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
<p className={styles.aboutinfooter}>
it's a long story i fell in website design 4 years ago I had a background in this profession and it was a reason that I've been in this route for 4 years I was thinking on launch a startup in <span><Link to='/aboutus'>... know more</Link></span>

</p>
</div>
<div className={styles.secondbox}>
<h3>Quick links</h3>
<br/>

<ul className={styles.quicklinks}>
<li><Link to='/'>Home page</Link></li>
<li><Link to='/blog'>Blog</Link></li>
<li><Link to='/aboutus'>About Us</Link></li>
<li><Link to='/contactus'>Contact Us</Link></li>
<li><Link to='/link1'>Link1</Link></li>
<li><Link to='/link2'>Link2</Link></li>

</ul>
</div>
<div className={styles.thirdbox}>
<h3>check me on ...</h3>
<br/>
<div className={styles.line}></div>
<div className={styles.iconbox}>
<span className={styles.mailicon}>{emailIcon} <Link to="mailto:ah.abshari@gmail.com">ah.abshari@gmail.com</Link></span>
<span className={styles.telIcon}>{phoneIcon} <Link to="tel:+989127756675">+98-912-7756675</Link></span>

</div>

<div className={styles.socialbox}>

</div>

</div>
        </div>
<div className={styles.copyrightbar}>
<p> &copy; All Rights Reserved by Webidemy 2022</p></div>

        
        </div> );
}
 
export  default Footer;