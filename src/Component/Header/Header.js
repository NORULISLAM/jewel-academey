import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../images/logo.png';
import { Routes, Route, Link } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    const handlesignOut = () => {
        signOut(auth);
    }
    return (
        <div className='mb-5'>
            <Navbar className='mb-5' collapseOnSelect expand="lg" fixed='top' bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img src={logo} height="40" alt="" />
                    </Navbar.Brand>
                    <Navbar.Brand as={Link} to="/home">Jewel Academey</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>

                            <NavDropdown title="Services" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="home#services">Web Developer Course</NavDropdown.Item>
                                <NavDropdown.Item href="home#services">TOEIC Course</NavDropdown.Item>
                                <NavDropdown.Item href="home#services">SEO Expert Course</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>

                        </Nav>
                        <Nav>

                            {
                                user?.uid ?
                                    <Nav.Link onClick={handlesignOut}>
                                        Sign Out
                                    </Nav.Link>
                                    :
                                    <Nav.Link as={Link} to="/login">
                                        Login
                                    </Nav.Link>



                            }



                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;