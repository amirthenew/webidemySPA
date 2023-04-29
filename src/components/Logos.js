import React from "react";
import styles from './Logos.module.css'
import html from '../images/html5.png'
import css from '../images/CSS3png.png'
import js from '../images/JS.png'
import sass from '../images/sass.png'
import react from '../images/React.png'
import npm from '../images/npm-logo.png'


const Logos = ()=>{

    return(
        <div className={styles.container}>
        <h3>My skills</h3>
        <div className={styles.logos}>
        <img src={html} alt='udemy'/>
        <img src={css} alt='udemy'/>
        <img src={js} alt='freelance'/>
        <img src={sass} alt='udemy'/>
        <img src={react} alt='udemy'/>
        <img src={npm} alt='freelance'/>
        </div>
        
        </div>
        )
}

export default Logos;