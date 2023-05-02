
import React from 'react';
import styled from 'styled-components';

const ContactUs = () => {



    const Container = styled.div`
   width:100%;
   min-height:100vh;
   background-color :#505050;
    
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
    `

    const Socialbox = styled.div`
    width : 40%;
    background-color : #435;
    height : 500px;

    border-radius : 1rem;
    
    `

    const ContactBox = styled.div`
    width : 60%;
    background-color : #343;
    height : 500px;
    
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
   <input type='text'/>
   </ContactBox>
  </Maindiv>




  </Container>
 
  );
}
 
export default ContactUs;