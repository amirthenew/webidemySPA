import React from 'react';
import styles from './Banner.module.css';
import HamburgerMenu from './HamburgerMenu';

const Banner = () => {
    return (  
        <div className={styles.container}>
        
<div className={styles.image}>
<HamburgerMenu/>
</div>

        </div>
    );
}
 
export default Banner;



