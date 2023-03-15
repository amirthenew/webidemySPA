import React from 'react';
import styles from './Banner.module.css';
import HamburgerMenu from './HamburgerMenu';

const Banner = () => {
    return (  
        <div className={styles.container}>
        
<div className={styles.image}>
<HamburgerMenu/>
<h1>Webidemy</h1>
<p>Make it onilne and <span>Jump</span>!</p>
</div>

        </div>
    );
}
 
export default Banner;



