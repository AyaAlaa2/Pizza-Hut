import React from 'react'
import { Container ,Row } from 'react-bootstrap'
import menuItems from './useMenuItemData'
import Item from './Item'

export default function FilterItems({data}) {
     const menuItemsElement = menuItems();
        return (
                 <Row className="menuItems justify-content-center mt-5 mb-5 w-75">
                    {
                        menuItemsElement.filter((itemFil) => (
                           itemFil.category==data
                        )).map((item)=>
                         <Item key={item.id} id={item.id} name={item.name} description={item.description} price={item.price} image={`Img/${item.image}`} loved = {item.isLoved} inCart={item.inCart} quantity={item.quantity}/> ) 
                    }
                </Row>
        )
}
