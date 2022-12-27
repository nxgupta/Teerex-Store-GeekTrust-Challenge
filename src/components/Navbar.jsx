import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({cart}) => {
  return (
    <div>
      <nav className='nav'>
      <Link to='/' style={{ color:'Black', textDecoration:'none'}}><div className='storename'>TeeRex Store</div></Link>
        <div className='cart'>
        <Link to='/cart'>
          <i className="fa badge fa-shopping-cart" aria-hidden="true" value={cart?.length} style={{ fontSize: "35px", cursor: "pointer",color:"black" }}></i></Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar