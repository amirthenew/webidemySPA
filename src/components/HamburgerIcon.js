import React from 'react';
import styles from './HamburgerIcon.module.css'

const HamburgerIcon = (props) => {

const {isOpen,handleClick} = props
    return (
        <div className={styles.hamicon} onClick={handleClick} >
        <div className={`${!isOpen ? styles.line1close : styles.line1}`}></div>
        <div className={`${!isOpen ? styles.line2close : styles.line2}`}></div>
        <div className={`${!isOpen ? styles.line3close : styles.line3}`}></div>
    </div>  );
}
 
export default HamburgerIcon;