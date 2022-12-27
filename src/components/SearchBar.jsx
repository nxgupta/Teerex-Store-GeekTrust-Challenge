import React from 'react'

const SearchBar = ({search,handleChange}) => {
    return (
        <div className='search-bar'>
            <div className='search-input'><input type='text' onChange={handleChange} placeholder='Search your products...' value={search}/></div>
            <div className='search-icon'>
                <i className="fa fa-search" aria-hidden="true"></i>
            </div>
        </div>
    )
}

export default SearchBar
