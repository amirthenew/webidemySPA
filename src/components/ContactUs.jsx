
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

   <label for="first_name">First Name</label>
   <input type="text" id="first_name" name="first_name"/>
   <label for="last_name">Last Name</label>
   <input type="text" id="last_name" name="last_name"/>
   </div>
   <div>
   <label for="email">Email</label>
   <input type="email" id="email" name="email"/>
   <label for="first_name">Phone number</label>
   <input type="text" id="first_name" name="first_name"/>
   </div>
   </form>


   </ContactBox>
  </Maindiv>




  </Container>
 
  );
}
 
export default ContactUs;