import React, { useState } from 'react'
import pizzaImage from '../assets/pizzahut-logo.png';
import { Navbar, Container, Nav, Button, Badge } from 'react-bootstrap';
import { FaMapMarkerAlt, FaRegUserCircle } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

export default function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const location = useLocation();
    const isOrderPage = location.pathname.startsWith('/order');


    return (
        <Navbar bg="white" expand="lg" className={`navbar shadow-sm position-fixed top-0 start-0 p-0 z-3 ${isOrderPage ? 'w-75' : 'w-100'}`}>
            <Container>
                <Navbar.Brand href="/Pizza-Hut/" className="logoImg fw-bold fs-4">
                    <img src={pizzaImage} alt='pizza Hut logo' />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbar-nav" />

                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto align-items-center">

                        <Nav.Link href="#" className="links me-3 d-flex align-items-center fw-bold">
                            <FaMapMarkerAlt className="me-1" />
                            <span className='locationSide'>Choose Location</span>
                        </Nav.Link>

                        <Nav.Link href="#" className="me-3 d-flex align-items-center LangBtn">
                            <span className='langSide d-inline-block'>عربي</span>
                        </Nav.Link>

                        <div className='d-flex'>
                            <Nav.Link href="#" className="links me-0 px-0 d-flex align-items-center">
                                <FaRegUserCircle className="me-1" />
                                <span className='signSide'>SIGN IN</span>
                                <span className='mx-2'>/</span>
                            </Nav.Link>
                            
                            <Nav.Link href="#" className="links mx-0 px-0 d-flex align-items-center">
                                <span className='signSide'>REGISTER</span>
                            </Nav.Link>
                        </div>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
