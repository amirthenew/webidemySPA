
import React,{useState} from 'react';
import styled from 'styled-components';
import styles from './ContactUs.module.css'
import Typewriter from "typewriter-effect";

const ContactUs = () => {

// const[inner,setInner] = useState('type your message here') 
// const [speed,setSpeed] = useState(50)
// const [count,counter] = useState(0)

// const typeWriter = ()=>{
//   if(count<inner.length){
//     setInner(document.querySelector('$txtid').innerHTML += inner.charAt(count))
//   }
// }

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
    `

    const Socialbox = styled.div`
    width :45%;
    background-color : rgb(255, 145, 0);
    height : 500px;
    border-radius : 1rem 0 0 1rem;
    overflow: hidden;
    
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
  
      onInit={(typewriter)=> {
    
      typewriter
       
      .typeString("Contact us !")
        
      .pauseFor(1000)
      .deleteAll()
      .start()
      .typeString("Contact us !");
      }}
      />
  </StyledHeading>

  <Maindiv>
   <Socialbox>
   My github
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
{}
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



