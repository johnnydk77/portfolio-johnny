import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import connectFour from '../assets/connectFour.png';
import drinkUp from '../assets/drinkUp.png';
import pairIt from '../assets/pairIt.png';

const Styles = styled.div`

.container {
    text-align: center;
    font-family: 'Roboto Slab', serif;
    background-color: #ebe4e6;
 }

.img {
    height: 300px;
    width: 550px;
    border: 2px solid black;
    border-radius: 15px;
    transform:scale(1, 1);
    transition: 1s;

    &:hover {
        transform:scale(1.5, 1.5);
    }
}

.connect-four {
    align-items: center;
    margin: 55px;
    border-bottom: 5px solid #6b0227;
    border-radius: 3px;
}

.drink-up {
    align-items: center;
    margin: 55px;
    border-bottom: 5px solid #6b0227;
    border-radius: 3px;
}

.pair-it {
    align-items: center;
    margin: 55px;
    border-bottom: 5px solid #6b0227;
    border-radius: 3px;
}

.projects {
    font-size: 65px;
}

.words {
    margin: 45px;
}

.connect-four-1 {
    font-size: 55px;
    color:  #3e558c;
   
}


.fa-3x::before {
    color: black;
    padding: 35px;
}



`;

export const Projects = () => (
    <Styles>
        <Container>


            <div>

                <div className='game-wrapper'>

                    <h2 className='projects' >Projects</h2>

                    <div className='connect-four'>
                        <a href={"https://pages.git.generalassemb.ly/johnnydk77/project1/"} ><img className="img" src={connectFour} alt="connect four" /></a>
                        <br></br>
                        {/* <a href={"https://pages.git.generalassemb.ly/johnnydk77/project1/"} className='connect-four-1'>Connect Four</a> */}
                        <h4 className='words'>A Javascript game of Connect Four.</h4>
                    </div>


                    <div className="drink-up">
                        <a href={"http://cowardly-cactus.surge.sh/"} ><img className="img" src={drinkUp} alt="drink up" /></a>
                        {/* <h3 className='connect-four-1'>Drink Up!</h3> */}
                        <br></br>
                        {/* <a href={"http://http://cowardly-cactus.surge.sh/"} className='connect-four-1'>Drink Up!</a> */}
                        <h4 className='words'>A Front End React App that helps you be the bartender! External API for the data.</h4>
                    </div>


                    <div className="pair-it">

                        <a href={"https://wine-pair-it.herokuapp.com/"} className='connect-four-1'><img className="img" src={pairIt} alt="pair it" /></a>

                        <br></br>
                        {/* <a href={"https://wine-pair-it.herokuapp.com/"} className='connect-four-1'>Pair It!</a> */}
                        <h4 className='words'>A React App on the front end. Ruby on Rails on the back end. Custom built API that allows you to match a wine by cuisine when the data is rendered.</h4>
                    </div>


                    <div className='icons'>
                        <a href={"https://github.com/johnnydk77"}><i className="fab fa-github-square fa-3x"></i></a>
                        <a href={"mailto:johnnydk77@gmail.com"}> <i className="fas fa-envelope-square fa-3x"></i></a>
                        <a href={"https://www.linkedin.com/in/johnnykinnaird/"}><i className="fab fa-linkedin fa-3x"></i></a>


                    </div>

                </div>
            </div>

        </Container>

    </Styles>
)

export default Projects;