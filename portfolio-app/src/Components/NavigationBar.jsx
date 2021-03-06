import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.navbar {
    background-color: #171130;
}

.navbar-brand, .navbar-nav .nav-link {
    color: #c5cdd9;
    
    &:hover {
        color: white;
    } 
}


.navbar-toggle {
    color: #bbb;
}


.link {
    color: #bbb;
}
`;

export const NavigationBar = () => (

    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">Johnny Kinnaird</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="/" className="link">Home</Link>
                    </Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link> <Link to="/projects"className="link">Projects</Link>
                    </Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link> <Link to="/contact"className="link">Contact</Link>
                    </Nav.Link></Nav.Item>
                    {/* <Nav.Item><Nav.Link> <Link to="/contact">Contact</Link>
                    </Nav.Link></Nav.Item> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>

)