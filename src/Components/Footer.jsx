import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'

export default function Footer() {
     const location = useLocation();
     const isOrderPage = location.pathname.startsWith('/order');
    return (
        <div className={`footer pt-5 ${isOrderPage ? 'w-75' : 'w-100 fluid'} `}>
            <Container>
                <Row className="gap-0 text-start mb-4">
                    <Col xs={12} md={3} >
                        <h5 className='text-white fw-bolder'>Menu</h5>
                        <div className='LinksFooter d-flex flex-column'>
                            <Link href="#" className='linkFoo text-decoration-none'>Deals</Link>
                            <Link href="#" className='linkFoo text-decoration-none'>Pizzas</Link>
                            <Link href="#" className='linkFoo text-decoration-none'>Melts</Link>
                            <Link href="#" className='linkFoo text-decoration-none'>Sides</Link>
                            <Link href="#" className='linkFoo text-decoration-none'>Wings</Link>
                            <Link href="#" className='linkFoo text-decoration-none'>Calories</Link>
                            <Link href="#" className='linkFoo text-decoration-none'>Allergens</Link>
                        </div>
                    </Col>
                    <Col xs={12} md={3} >
                        <h5 className='text-white fw-bolder'>About Us</h5>
                        <div className='LinksFooter d-flex flex-column'>
                            <Link href="#" className='linkFoo text-decoration-none'>About Pizza Hut</Link>
                            <Link href="#" className='linkFoo text-decoration-none'>Pizza Hut Near Me</Link>
                        </div>
                    </Col>
                    <Col xs={12} md={3} >
                        <h5 className='text-white fw-bolder'>Policies</h5>
                        <div className='LinksFooter d-flex flex-column'>
                            <Link href="#" className='linkFoo text-decoration-none'>Privacy Policy</Link>
                            <Link href="#" className='linkFoo text-decoration-none'>Terms of Use</Link>
                        </div>
                    </Col>
                    <Col xs={12} md={3} >
                        <h5 className='text-white fw-bolder'>Customer Service</h5>
                        <div className='LinksFooter d-flex flex-column'>
                            <Link href="#" className='linkFoo text-decoration-none'>Contact Pizza Hut</Link>
                            <Link href="#" className='linkFoo text-decoration-none'>FAQs</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div>
                <div className="line">
                </div>
                <p className='text-white pb-4'>&copy; 2025 Yum! III (UK) Ltd. All rights reserved.</p>
            </div>
        </div>
    )
}
