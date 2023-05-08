import React from "react";
import styles from './Logos.module.css'
import html from '../images/html5.png'
import css from '../images/css.png'
import js from '../images/JS.png'
import sass from '../images/sass.png'
import react from '../images/React.png'
import npm from '../images/npm-logo.png'


const Logos = ()=>{

    return(
        <div className={styles.container}>
        <h3>My skills</h3>
        <div className={styles.logos}>
        <img src={html} alt='html'/>
        <img className={styles.css3}  src={css} alt='css'/>
        <img src={js} alt='js'/>
        <img src={sass} alt='sass'/>
        <img src={react} alt='react'/>
        <img src={npm} alt='npm'/>
        </div>
        
        </div>
        )
}

export default Logos;