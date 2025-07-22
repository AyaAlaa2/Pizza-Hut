import React, { useState } from 'react'
import { Col, Card, Button, Container } from 'react-bootstrap';
import img from '/Img/deals.jpg'
import { FcLike } from "react-icons/fc";
import FavIcon from "../assets/loveIcon.png"
import FavIcon2 from "../assets/loveIcon2.png"
import { useCart } from "./CartContext";

export default function Item({id,name, description , price , image , loved ,inCart , quantity}) {
    let text = description;
    let maxLength = 35;
    const [expanded, setExpanded] = useState(false)
    const toggleText = () => setExpanded(!expanded)
    const [lovedItem , setLovedItem] = useState(false)
    const toggleLoved =() =>{
        setLovedItem(!lovedItem)
        loved = !loved
    }
    const { addToCart } = useCart();
    const handleAdd = () => {
         const item = { id, name, description, price, image ,loved , inCart , quantity};
         addToCart(item);
  };

    return (
            <Col xs={12} sm={6} md={4}>
                <Card>
                    <Card.Img src={image} alt={name}/>
                    <Card.Body>
                        <Card.Title className='d-flex justify-content-between align-items-center'>
                            <h5 className='text-start mb-0'>{name}</h5>
                             <span onClick={toggleLoved}>
                                  {lovedItem ? <img src={FavIcon} width={30} height={30}/> : <img src={FavIcon2} width={30} height={30}/>}
                             </span>
                        </Card.Title>
                        <Card.Text className='subTitle text-start'>
                                {text.length < maxLength? text : `${text.slice(0, maxLength)}... `}
                                <span style={{ color: "black" }} className='fw-bold toolTipContainer' >
                                     {text.length < maxLength ? "" : "...more"}
                                </span>  
                                
                        </Card.Text>
                        <div className='d-flex justify-content-between align-items-baseline'>
                            <p className='priceItem'>SAR {price}</p>
                            <Button className='itemButton' onClick={handleAdd}>Add to card</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
    )
}
