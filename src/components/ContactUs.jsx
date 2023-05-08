
import React,{useState} from 'react';
import styled from 'styled-components';
import styles from './ContactUs.module.css'
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import gitHubSvg from '../images/GitHub.svg'
import instaIcon from '../images/Instagram.png'
import vercelIcon from '../images/Vercel.png'
import Outloook from '../images/outlook.png'
import { Link } from "react-router-dom";

const ContactUs = () => {



    const Container = styled.div`
   width:100%;
   min-height:100vh;
   background-color :#cacaca;
    
    `

    const StyledHeading = styled.h1`
    color : #000;
    font-size : 2rem;
    text-align : center;
    padding-top : 1rem;
    
    `
    const Maindiv = styled.div`
    width : 80%;
    display : flex;
    margin : auto ;
    padding : 1rem;
    @media (max-width :450px){
      flex-direction : column;
    }

    `

    const Socialbox = styled.div`
    width :45%;
    background-color : rgb(255, 145, 0);
    border-radius : 1rem 0 0 1rem;
    overflow: hidden;
    display : flex;
    flex-direction : column;
    @media (max-width :450px){
      width : 100%;
      border-radius : 1rem;
    }

    
    `

    const IconBox = styled.div`
width : 100%;
padding-right : 1rem;
display : flex;
justify-content: center;
align-items: center;
    overflow: hidden;
    margin : auto;

    `

    const ContactBox = styled.div`
    width : 55%;
    background-color : #fff;
    height : 500px;
    border-radius : 0 1rem 1rem 0;
    
    `


    return ( 

 
      <Container>
      <StyledHeading>
      <Typewriter
      options={
        {
          strings : ['contact us' , 'easy and fast !'],
          autoStart:true,
          loop : true,
    
        }
      }
    
       


      />
  </StyledHeading>

  <Maindiv>
   <Socialbox>
   <IconBox>
   <Link to='https://github.com/amirthenew'><img className={styles.github}  src={gitHubSvg}/></Link>
   <Link to='https://github.com/amirthenew'><img className={styles.instaIcon}  src={instaIcon}/></Link>
   <Link to='https://github.com/amirthenew'><img className={styles.vercelIcon}  src={vercelIcon}/></Link>
   <Link to='https://github.com/amirthenew'><img className={styles.Outloook}  src={Outloook}/></Link>

   
   </IconBox>

   </Socialbox>
   <ContactBox>
   <form>
   <div>
   <input className={styles.Input} type="text" id="first_name" name="first_name" placeholder='First Name'/>
   <input className={styles.Input} type="text" id="last_name" name="last_name" placeholder='Last Name'/>
   </div>
   <div>
   <input className={styles.Input} type="email" id="email" name="email" placeholder='Email'/>
   <input className={styles.Input} type="tel" id="Phone" name="Phone" placeholder='Phone'/>
   </div>
   <div >
   <textarea className={styles.txtarea} placeholder='type your message here' id="txtid" name="txtname" rows="3" maxlength="200">

   </textarea>
   

   <button className={styles.Button} type="submit" value="Submit">
   Send
   </button>
   </div>

   </form>


   </ContactBox>
  </Maindiv>




  </Container>
 
  );
}
 
export default ContactUs;



