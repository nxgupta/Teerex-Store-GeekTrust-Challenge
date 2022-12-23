import React from 'react'

const Filters = () => {
  return (
    <div className='filters'>
        <div className='category'>
            <header>Colour</header>
            <label>
                <input type='checkbox' />
                Red
            </label>
            <label>
                <input type='checkbox' />
                Blue
            </label>
            <label>
                <input type='checkbox' />
                Green
            </label>
        </div>
        <div className='category'>
        <header>Gender</header>
        <label>
            <input type='checkbox' />
            Men
        </label>
        <label>
            <input type='checkbox' />
            Women
        </label>
        </div>
        <div className='category'>
        <header>Price</header>
        <label>
            <input type='checkbox' />
            0-Rs250
        </label>
        <label>
            <input type='checkbox' />
            Rs250-Rs450
        </label>
        <label>
            <input type='checkbox' />
            Rs450
        </label>
        </div>
        <div className='category'>
        <header>Type</header>
        <label>
            <input type='checkbox' />
            Polo
        </label>
        <label>
            <input type='checkbox' />
            Hoodie
        </label>
        <label>
            <input type='checkbox' />
            Basic
        </label>
        </div>
    </div>
  )
}

export default Filters