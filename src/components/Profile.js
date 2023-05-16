import React from 'react';
import styles from './Profile.module.css'
import { Link } from 'react-router-dom';
const Profile = () => {
    return (

        
        <div className={styles.container}>
        <div className={styles.photo}></div>
          <div className={styles.textbox}>
            <h3>Who I Am ?!</h3>
            <p>
             I'm Amirhossein Abshari A junior front-end web developer who loves Javascript and now i'm happy cause I've launched my first react full static web page ... <span className={styles.moreinfo}> <Link to='/aboutus'>more info</Link></span>
            </p>

            

          

        </div>
        </div>


      
      )
}
 
export default Profile;