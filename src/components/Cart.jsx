import React from 'react'
import Navbar from './Navbar'


const Cart = ({ cart, setCart, products }) => {
  const handleDelete = (item) => {
    setCart(cart.filter(product => product.id !== item.id))
  }

  const handleClick = ((item, quantity, action) => {

    if (action == 'plus' && quantity >= 1) {
      let addedItem=products.filter(product=>product.id===item.id);
        if(addedItem[0].quantity>quantity){
          setCart(cart.map(product => {
            if (product.id === item.id) {
              console.log(product.id, item.id)
              return { ...product, quantity: item.quantity + 1 }
            }
            else {
              return product
            }
          }))
        }
        else{
          alert('You have added the maximum quantity')
        }
      }
    if (action == 'minus' && quantity > 1) {
      setCart(cart.map(product => {
        if (product.id === item.id) {
          console.log(product.id, item.id)
          return { ...product, quantity: item.quantity - 1 }
        }
        else {
          return product
        }
      }))
    }
  })
  console.log(cart)
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
                <span>Rs. {item.price * item.quantity}</span>
              </div>
              <div className='item-quantity'>
                <button >
                  <i className="fa fa-plus" aria-hidden="true" onClick={() => handleClick(item, item.quantity, 'plus')}></i>
                </button>
                <span style={{ margin: "0px 5px", fontWeight: "bold" }}>{item.quantity}</span>
                <button >
                  <i className="fa fa-minus" aria-hidden="true" onClick={() => handleClick(item, item.quantity, 'minus')}></i>
                </button>
              </div>
              <button className='delete-btn' onClick={() => handleDelete(item)}>Delete</button>
            </div>
          ))) : (
            <div className='loading'>
              Cart is Empty
            </div>
          )
        }

      </div>
      <div>
        <hr/>
        <div className='total'>
          Total Payable Amount : {cart.reduce((total,curr)=>total+=(curr.price*curr.quantity),0)}
        </div>
      </div>

    </>
  )
}

export default Cart