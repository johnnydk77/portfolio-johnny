import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import cityImage from '../assets/cityImage.jpg';

const Styles = styled.div`
    .jumbo {
        background: url(${cityImage}) no-repeat fixed bottom;
        backgroun-size: cover;
        color: #1a0a0f;
        height: 250px;
        position: relative;
        z-index: -2;
        opacity: 0.6;
    }

    .overlay {
        background-color: #1a0a0f;
        opacity: 0.3;
        postition: relative;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
`;

export const Jumbotron = () => (
    <Styles>
         
        
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
              
               
                </Container>
        </Jumbo>
       
    </Styles>
)