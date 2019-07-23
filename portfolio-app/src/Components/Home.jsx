import React from 'react';
import myImage from '../assets/myImage.jpg';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const Styles = styled.div`
    .container {
       text-align: center;
       font-family: 'Roboto Slab', serif;
       background-color: #ebe4e6;
    }

    .name {
        font-size: 45px;
        padding: 15px;
    }

    .job {
        font-size: 40px;
        padding: 5px;
    }

    .home-image {
        height: 400px;
        width: 400px;
        border: 3px solid black;
        border-radius: 15px;
        
    }

    .brand {
        align-items: center;
        font-size: 25px;
        font-style: italic;
        // width: 780px;
        margin: 40px;
        border-bottom: 5px solid #6b0227;
        padding: 40px;
        border-radius: 3px;
       
        
    }
    
    .about-me {
        text-align: center;
        font-size: 40px;
        color: #18083d;
      
    }

    .about {
        text-align: center;
        font-size: 20px;
        margin: auto 0;
        padding: 20px;
    }

    .about-container {
        align-items: center;
        margin: 40px;
        border-bottom: 5px solid #6b0227;
        border-radius: 3px;
    }

 

  .fa-3x::before {
      color: black;
      padding: 35px;
  }
`;




export const Home = () => (
    <Styles>

        <Container className='container'>
            <div>
                <h2 className='name'>Johnny Kinnaird</h2>
                <h2 className='job'>Programmer / Designer / Software Engineer</h2>
                <img className='home-image' src={myImage} alt="home image" />
                <p className='brand'>I am passionate about the possibility of what technology can be. I am an avid learner always searching for new information. I am a thinker. I am a doer. I love to see a project come to fruition from the ground up. I write code. I write songs. I'll cook ya whatever you want to eat!</p>
            </div>


            <div className='about-container'>
                <h2 className='about-me'>About Me...</h2>
                <br></br>

                <p className='about'>After a successful career as a classically trained actor and professional musician I decided to parlay those skills into my newly acquired passion for tech.</p>

                <p className='about'>Playing everything from Broadway to the corner of every dive bar in America actually taught me a lot about working with every type of person in every type of situation.</p>

                <p className='about'>All of this brought me to graduate from the Software Engineering Immersive at General Assembly in NYC in July of 2019.</p>

                <p className='about'>At GA I studied JS, React, Node.js, Ruby, Ruby on Rails, HTML 5, CSS, Express, SQL, and Postgres.</p>

                <p className='about'>I can't wait to learn more and grow as a coder and as a person.</p>

               
        </div>
       
        <div className='icons'>
                        <a href={"https://github.com/johnnydk77"} className='iconical'><i className="fab fa-github-square fa-3x "></i></a>
                       <a href={"mailto:johnnydk77@gmail.com"}> <i className="fas fa-envelope-square fa-3x"></i></a>
                        <a href={"https://www.linkedin.com/in/johnnykinnaird/"}><i className="fab fa-linkedin fa-3x"></i></a>


                    </div>

        </Container>

    </Styles>

        )
        
export default Home;