import React from 'react';
import myImage from '../assets/myImage.jpg';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const Styles = styled.div`
    .container {
       text-align: center;
    }

    .home-image {
        height: 400px;
        width: 400px;
        border: 3px solid black;
        border-radius: 4px;
    }

    .brand {
        // text-align: center;
        width: 46%;
        font-size: 25px;
        font-style: italic;
        
    }
    
    .about-me {
        text-align: center;
        font-size: 40px;
        color: #18083d;
      
    }

`;




export const Home = () => (
   <Styles>
    
    <Container className='container'>
        <div>
     
        <img className='home-image'src={myImage} alt="home image"/>
        <p className='brand'>This is where my brand statement will go. I will talk about myself and everything and everyone will seem to be ok with that. So far, my brand consists of bouncing around from city to city and job to job. Always on a plane somewhere else looking for something else. If this at all sounds appealing to you as an employer than I am your man.</p>
        
        <h2 className='about-me'>About Me.</h2>
        <p className='about'></p>
        
        </div>
       
     
        </Container>

     </Styles> 
)

export default Home;