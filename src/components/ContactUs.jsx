
import React from 'react';
import styled from 'styled-components';

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
   <input type='text'/>
   </ContactBox>
  </Maindiv>




  </Container>
 
  );
}
 
export default ContactUs;