import React from 'react'
import Navbar from './Navbar'
import Filters from './Filters'
import Products from './Products'
import SearchBar from './SearchBar'

const Display = (props) => {
  return (
    <div>
        <Navbar />
        <SearchBar />
        <div className='display'>
            <Filters />
            <Products {...props}/>
        </div>   
    </div>
  )
}

export default Display