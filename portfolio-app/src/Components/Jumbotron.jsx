import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import myImage from '../assets/myImage.jpg';

const Styles = styled.div``;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1>Johnny Kinnaird</h1>
                <p>Portfolio</p>
            </Container>
        </Jumbo>
    </Styles>
)