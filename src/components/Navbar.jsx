import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <div>
      <nav className='nav'>
      <Link to='/' style={{ color:'Black', textDecoration:'none'}}><div className='storename'>TeeRex Store</div></Link>
        <div className='cart'>
        <Link to='/cart'>
          <i className="fa badge fa-shopping-cart" aria-hidden="true" value='5' style={{ fontSize: "35px", cursor: "pointer",color:"black" }}></i></Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar