import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const Styles = styled.div`
    .container {
        text-align: center;
      

    }

    .contact-wrapper {
        border-bottom: 5px solid #6b0227;
        border-radius: 3px;
    }


  .fa-3x::before {
    color: black;
    padding: 35px;
}

`;



export const Contact = () => (
<Styles>
    <Container className="container">
        <div className="contact-wrapper">
            <h2 className="contact">Contact:</h2>
            <h3>johnnydk77@gmail.com</h3>
            <h3>718.704.9406</h3>


            
            <div className='icons'>
                        <a href={"https://github.com/johnnydk77"}><i className="fab fa-github-square fa-3x"></i></a>
                       <a href={"mailto:johnnydk77@gmail.com"}> <i className="fas fa-envelope-square fa-3x"></i></a>
                        <a href={"https://www.linkedin.com/in/johnnykinnaird/"}><i className="fab fa-linkedin fa-3x"></i></a>


                    </div>

        </div>

    </Container>

    </Styles>
)

export default Contact;