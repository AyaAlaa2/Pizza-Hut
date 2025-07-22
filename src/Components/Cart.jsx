import React from 'react'
import { useCart } from "./CartContext";
import pizzaBag from '/Img/Pizza Hut_cart.png'
import {Link} from 'react-router-dom'
import CartItem  from './CartItem'

export default function Cart() {
  const { cartItems, increaseQuantity, decreaseQuantity } = useCart();
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cartItem w-25 position-fixed top-0 overflow-scroll pb-3">
      <h4 className="cartTitle fw-bold p-5 position-relative">Your Cart</h4>  
      {cartItems.length === 0 ? (
        <div>
        <div>
          <p className="fs-6 mt-2" >Your basket looks empty at the moment. Why not add something delicious from Our Menu?</p>
          <img src="/Img/Pizza Hut_cart.png" className="w-100 mt-3 pt-3" style={{height : '230px'}}/>
        </div>
       </div>
      ) : (
        cartItems.map((item) => (
          <CartItem key={item.id} id={item.id} image ={`${item.image}`} name={item.name} price={item.price} quantity={item.quantity}  onAdd={increaseQuantity} onRemove={decreaseQuantity}/>
        ))
      )}

      <div className="priceDiv position-fixed bottom-0 end-0 w-25 p-2">
            <p className={`fs-5 p-0 ${cartItems.length === 0 && totalPrice > 50 ? "d-block" : "d-none"}`}>Minimum cart value for delivery is <span className="fw-medium">SAR 50.00</span></p>
            <div className="d-flex justify-content-center gap-4 p-3 fs-5 align-items-baseline">
                <Link href="#" className={`Apply-Coupon text-decoration-none ${cartItems.length!==0 ? "" : "active"}`}>Apply Coupon</Link>
                <input type="button" value={`${totalPrice > 50 ? `Checkout SAR ${totalPrice} `: "Checkout"}`} className={`Checkout border-0 text-white ${cartItems.length!==0 && totalPrice>50? "" : "active"}`} />
            </div>
        </div>  
    </div>
  )
}
