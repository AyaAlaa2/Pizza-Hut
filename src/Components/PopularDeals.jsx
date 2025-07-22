import React from 'react'
import { Container ,Button ,Col} from 'react-bootstrap'
import deals1 from '/Img/deals1.jpg'
import deals2 from '/Img/deals2.jpg'
import { useNavigate } from 'react-router-dom'


export default function PopularDeals() {
    const orderComp = useNavigate()
    return (
        <Container className='mb-5'>
            <div>
                <h4 className='headerSectionDeals mb-4 position-relative'>Our Most Popular Deals</h4>
            </div>
            <div className='imgDeals row gap-4 gap-md-0'>
               <Col xs={12} sm={6}>
                  <img src={deals1} className='w-100'/>
               </Col>
               <Col xs={12} sm={6}>
                  <img src={deals2} className='w-100'/>
               </Col>
                
            </div>
            <Button className='btnDeals mt-3 w-100 m-0 py-2' size="lg" onClick={() => { orderComp("/order/Deals") }}>
               See all deals & menus
            </Button>
        </Container>
    )
}
