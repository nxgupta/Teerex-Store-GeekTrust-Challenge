import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'


const Cart = ({ cart, setCart }) => {
  const handleDelete=(product)=>{
    setCart(cart.filter(item=>item.id!==product.id))
    
  }
  return (
    <>
      <Navbar />
      <div className='shopping-cart'><h4>Shopping Cart</h4></div>
      <div className='cart-items'>
        {
          cart?.length ? (cart.map(item => (
            <div className='item' key={item.id}>
              <div className='item-image'>
                <img src={item.imageURL} alt={item.name} />
              </div>
              <div className='item-detail'>
                <span>{item.name}</span>
                <span>Rs. {item.price}</span>
              </div>
              <button className='item-quantity'>
                <i className="fa fa-plus" aria-hidden="true"></i>
                <span style={{ margin: "0px 5px", fontWeight: "bold" }}>{item.quantity}</span>
                <i className="fa fa-minus" aria-hidden="true"></i>
              </button>
              <button className='delete-btn' onClick={()=>handleDelete(item)}>Delete</button>
            </div>
          ))) : (
            <div className='loading'>
              Cart is Empty
            </div>
          )
        }
      </div>

    </>
  )
}

export default Cart