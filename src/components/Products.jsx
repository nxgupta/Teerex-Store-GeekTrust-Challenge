import React, { useEffect, useState }
    from 'react'
import axios from 'axios';

const Products = ({products,setProducts,cart,setCart}) => {
    const itemData={
        name:"",
        price:"",
        quantity:"",
        image:""
    }
    useEffect(() => {
        async function fetchData() {
            let response = await axios.get('https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json');
            setProducts(response.data)
        }

        fetchData();
    }, [])

    const handleClick=({id,name,price,imageURL})=>{
        if(cart.find(item=>item.id===id)){
            alert(`${name} is already added to cart`)
        }
        else{
        alert(`${name} has been added to cart`)
        setCart([...cart,{id,name,price,imageURL,quantity:1}])
        }
    }
    return (
        <div className='products'>
            {products.map(item => (
                <div className="card" key={item.id}>{item.name}
                    <div className="card-image">
                        <img src={item.imageURL} alt={item.name} />
                    </div>
                    <div className='card-footer'>
                        <span>Rs {item.price}</span>
                        <button className='add-btn' onClick={()=>handleClick(item)}>Add to cart</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Products