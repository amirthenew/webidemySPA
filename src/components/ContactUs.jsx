
import React from 'react';
import styled from 'styled-components';
import styles from './ContactUs.module.css'

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
    width : 90%;
    display : flex;
    margin : auto ;
    padding : 1rem;
    `

    const Socialbox = styled.div`
    width : 40%;
    background-color : rgb(255, 145, 0);
    height : 500px;
    border-radius : 1rem 0 0 1rem;
    
    `

    const ContactBox = styled.div`
    width : 60%;
    background-color : #fff;
    height : 500px;
    border-radius : 0 1rem 1rem 0;
    
    `


    return ( 

 
      <Container>
      <StyledHeading>
Contact Us
  </StyledHeading>

  <Maindiv>
   <Socialbox>
   My github
   </Socialbox>

   <ContactBox>


   <form>
   
   <div>


   <input type="text" id="first_name" name="first_name" placeholder='First Name'/>

   <input type="text" id="last_name" name="last_name" placeholder='Last Name'/>
   </div>
   <div>

   <input type="email" id="email" name="email" placeholder='Email'/>

   <input type="tel" id="Phone" name="Phone" placeholder='Phone'/>
   </div>

   <div style={{display:'flex',flexDirection:'column'}}>
   <p>message</p>
   <textarea placeholder='type your message here' id="txtid" name="txtname" rows="3" cols="50" maxlength="200">

   </textarea>


   <button style={{width:'150px',display:'flex',justifyContent:'flex-end'}} type="submit" value="Submit">
   Send it !
   </button>
   </div>

   </form>


   </ContactBox>
  </Maindiv>




  </Container>
 
  );
}
 
export default ContactUs;