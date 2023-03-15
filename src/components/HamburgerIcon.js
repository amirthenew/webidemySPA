import React from 'react';
import styles from './HamburgerIcon.module.css'

const HamburgerIcon = (props) => {
    return (<div className={styles.hamicon} onClick={props.handleClick}  >
        <div className={styles.line1}></div>
        <div className={styles.line2}></div>
        <div className={styles.line3}></div>
    </div>  );
}
 
export default HamburgerIcon;