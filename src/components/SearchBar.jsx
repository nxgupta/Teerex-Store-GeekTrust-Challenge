import React, { useState } from 'react'
import Filters from './Filters'

const SearchBar = ({search,handleChange,searchedData, filteredData, setFilteredData }) => {
    const [filter,setFilter]=useState(true)

    const openFilter=()=>setFilter(!filter)
    return (
            <div className='search-bar'>
                <div className='search-input'><input type='text' onChange={handleChange} placeholder='Search your products...' value={search}/></div>
                <div className='search-icon'>
                    <i className="fa fa-search" aria-hidden="true"></i>
                </div>
                <div className='filter-icon' onClick={openFilter}>
                <i class="fa-sharp fa-solid fa-filter"></i>
                </div>
            </div>
    )
}

export default SearchBar
