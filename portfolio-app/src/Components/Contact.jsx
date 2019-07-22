import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const Styles = styled.div`
    .container {
        text-align: center;
        
    }
`;



export const Contact = () => (
<Styles>
    <Container className="container">
        <div className="contact-wrapper">
            <h2 className="contact">Contact:</h2>
            <h3>johnnydk77@gmail.com</h3>
            <h3>718.704.9406</h3>

        </div>

    </Container>

    </Styles>
)

export default Contact;