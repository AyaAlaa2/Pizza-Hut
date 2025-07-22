import React,{useState}  from 'react'
import {Row ,Col} from 'react-bootstrap'
import { useCart } from "./CartContext";


export default function CartItem({id , image , name , price , quantity , onAdd, onRemove}) {
  return (
      <div className="card-item d-flex justify-content-between px-3 align-items-center">
        <div className="d-flex justify-content-between">
            <img src={image} width='60' height='50' className="imgItemCart"/>
            <h5 className="ms-2 text-start flex-wrap">{name}</h5>
        </div>
        <div className="d-flex flex-column justify-content-between pe-3 flex-nowrap">
           <p className="priceItem fw-bold fs-6">SAR {price}</p>
           <div className="quantityItem">
              <span className="quantityItemCount minCount d-inline-block fw-bold text-danger" onClick={() => onRemove(id)}>-</span>
              <span className="quantityItemCount d-inline-block text-secondary">{quantity}</span>
              <span className="quantityItemCount plusCount d-inline-block fw-bold text-success" onClick={() => onAdd(id)}>+</span>
            </div>
        </div>
      </div>
  )
}

