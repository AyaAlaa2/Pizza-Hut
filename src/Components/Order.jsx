import React from 'react'
import { Outlet } from 'react-router-dom'
import MEnuCatBtn from './MEnuCatBtn'
import FilterItems from './FilterItems'
import Cart from './Cart'
import {Row , Col , Container} from 'react-bootstrap'
import Header from './Header'
import Footer from './Footer'


export default function Order() {
  return (
     <div className="order overflow-scroll">
      <div>
        <MEnuCatBtn />
        <Outlet />
      </div>

      <div >
        <Cart />
      </div>
      </div>
  )
}
