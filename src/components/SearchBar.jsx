import React from 'react'

const SearchBar = () => {
    return (
        <div className='search-bar'>
            <div className='search-input'><input type='text' placeholder='Search your products...' /></div>
            <div className='search-icon'>
                <i className="fa fa-search" aria-hidden="true"></i>
            </div>
        </div>
    )
}

export default SearchBar
