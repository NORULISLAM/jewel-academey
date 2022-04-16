import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} height="40" alt="" />
                    </Navbar.Brand>
                    <Navbar.Brand href="#home">Jewel Academey</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#transformyourself">Transform Yourself</Nav.Link>
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#home">About Jewel Academey</Nav.Link>
                            <NavDropdown title="Services" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">One One Coaching</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Winning Habit</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Career Coaching</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Success Roadmap for Enterpreneurship Growth</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                            <Nav.Link eventKey={2} href="#blog">
                                Blog
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;