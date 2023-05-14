import React from 'react';
import styles from './AboutUs.module.css'



const AboutUs = ()=>{

    return (<div className={styles.body}>
    
    <h1>About us</h1>

    <div className={styles.container}>

    <div className={styles.leftside}>
    <h2>who am i ?</h2>
    <p className={styles.aboutustext}>
    I'm Amirhossein Abshari A junior front-end web developer who loves Javascript and now i'm happy cause I've launched my first react full static web page
    i live in Iran-Tehran and I was born in 1994
    </p>
    
    <h2>what is webidemy</h2>
    <p className={styles.aboutustext}>
    it's a long story 
    i fell in website design 4 years ago I had a background in this profession and it was a reason that I've been in this route for 4 years
    I was thinking on launch a startup in tourism and I need a website and I learned it after creating some project I created webidemy Instagram for take website design projects
    </p>
    
    </div>
    <div className={styles.rightside}>
    
    </div>
    </div>

    </div>)
}


export default AboutUs;