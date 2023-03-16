import React from 'react';
import styles from './HamburgerIcon.module.css'

const HamburgerIcon = (props) => {


    return (
        <div className={styles.hamicon} onClick={props.handleClick} >
        {console.log(props.isOpen)}
        <div className={`${props.isOpen ? styles.line1close : styles.line1}`}></div>
        <div className={`${props.isOpen ? styles.line2close : styles.line2}`}></div>
        <div className={`${props.isOpen ? styles.line3close : styles.line3}`}></div>
    </div>  );
}
 
export default HamburgerIcon;