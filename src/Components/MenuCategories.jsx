import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { FaChevronRight } from "react-icons/fa";
import MenuItems from './MenuItems';
import menuCategory from './fetchMenuData.jsx'
import { Link } from 'react-router-dom';

export default function MenuCategories() {
    const menuCategoryItem = menuCategory();
    return (
        <Container>
            <div className='d-flex justify-content-between'>
                <h4 className='headerSection'>Explore Our Menu</h4>
                <Link to="/order/Deals" className='text-decoration-none text-dark'><h4 className='viewAll fw-bold'>View All <FaChevronRight /></h4></Link>
            </div>
            <Row className="justify-content-center mt-5 mb-5">
                {
                    menuCategoryItem.map((item) => (
                        <MenuItems key={item.id} id={item.id} image={`Img/${item.image}`} title={item.title} />
                    ))
                }
            </Row>
        </Container>
    )
}
