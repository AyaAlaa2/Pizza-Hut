import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function MenuItems({ id, image, title }) {
    return (
        <Col key={id} md={2} sm={4} xs={6} className="text-center mb-4 ">
            <Link to={`/order/${title}`} className='text-decoration-none'>
            <div className="menu-circle">
                <img
                    src={image}
                    alt={title}
                    className="img-fluid rounded-circle shadow"
                />
                <p className="mt-4 fw-bold fs-5 text-decoration-none text-dark">{title}</p>
            </div>
            </Link>
        </Col>
    )
}
