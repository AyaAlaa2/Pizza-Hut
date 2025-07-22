import Header from './Components/Header'
import Home from './Components/Home'
import MenuCategories from './Components/MenuCategories'
import PopularDeals from './Components/PopularDeals'
import Footer from './Components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Deals from './Components/Deals'
import './App.css'
import Pizza from './Components/Pizza'
import Order from './Components/Order'
import Melts from './Components/Melts'
import Sides from './Components/Sides'
import Pastas from './Components/Pastas'
import Wings from './Components/Wings'
import MEnuCatBtn from './Components/MEnuCatBtn'


function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/order' element={<Order />}>
           <Route path='Deals' element={<Deals/>}/>
           <Route path='Pizza' element={<Pizza/>}/>
           <Route path='Melts' element={<Melts/>}/>
           <Route path='Sides' element={<Sides/>}/>
           <Route path='Wings' element={<Wings/>}/>
           <Route path='Pastas' element={<Pastas/>}/>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
