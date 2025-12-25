import React from 'react'
import './index.css'
const ProductCart2 = (props) => {    
  return (
    <div className='cart_container'>
        <img src={props.url} alt="alternate" />
        <h3>{props.title}</h3>
        <p>{props.price}</p>
        <span>{props.stock}</span>
        <button>ADD</button>
    </div>
  )
}

export default ProductCart2