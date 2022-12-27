import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Filters from './Filters'
import Products from './Products'
import SearchBar from './SearchBar'

const Display = ({ products, setProducts, cart, setCart, searchedData, setSearchedData, filteredData,setFilteredData }) => {

    const [search, setSearch] = useState("");

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => { setSearchedData(products.filter(product => product.name.match(new RegExp(search, "i")))) }, [search])

    return (
        <div>
            <Navbar cart={cart} />
            <SearchBar search={search} handleChange={handleChange} />
            <div className='display'>
                <Filters searchedData={searchedData} filteredData={filteredData} setFilteredData={setFilteredData}/>
                {products.length > 0 ? (<Products products={filteredData?.length>0?filteredData:searchedData} cart={cart} setCart={setCart} setProducts={setProducts} />) : (<p style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>loading...</p>)}
            </div>
        </div>
    )
}

export default Display