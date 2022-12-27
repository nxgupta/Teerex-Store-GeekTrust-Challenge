import React, { useEffect, useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import Cart from './components/Cart'
import './App.css'
import Display from './components/Display'
import axios from 'axios'


const App = () => {
    const [products, setProducts] = useState([]);
    const [cart,setCart]=useState([]);
    const [searchedData, setSearchedData] = useState([])
    const [filteredData, setFilteredData] = useState([])
    useEffect(() => {
        async function fetchData() {
            let response = await axios.get('https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json');
            setProducts(response.data)
            setSearchedData(response.data)
        }

        fetchData();
    },[])
    return (
        <>
            <Routes>
                <Route path='/' element={<Display products={products} cart={cart} setCart={setCart} setProducts={setProducts} searchedData={searchedData} setSearchedData={setSearchedData} filteredData={filteredData} setFilteredData={setFilteredData}/>}/>
                <Route path='/cart' element={<Cart cart={cart} setCart={setCart} products={products}/>}/>
            </Routes>
        </>
    )
}

export default App