import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <div>
      <nav className='nav'>
        <div className='storename'>TeeRex Store</div>
        <div className='cart'>
        <Link to='/cart' style={{ color: 'white' }}>
          <i className="fa badge fa-shopping-cart" aria-hidden="true" value='5' style={{ fontSize: "35px", cursor: "pointer",color:"black" }}></i></Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar