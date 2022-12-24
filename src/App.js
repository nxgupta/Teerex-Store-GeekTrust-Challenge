import React, { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import Cart from './components/Cart'
import './App.css'
import Display from './components/Display'


const App = () => {
    const [products, setProducts] = useState([]);
    const [cart,setCart]=useState([]);
    return (
        <>
            <Routes>
                <Route path='/' element={<Display products={products} setProducts={setProducts} cart={cart} setCart={setCart}/>}/>
                <Route path='/cart' element={<Cart cart={cart} setCart={setCart} products={products}/>}/>
            </Routes>
        </>
    )
}

export default App