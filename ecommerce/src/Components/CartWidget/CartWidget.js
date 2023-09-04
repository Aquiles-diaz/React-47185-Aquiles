import React from 'react'
import "../CartWidget/cart.css"

const CartWidget = () => {
  return (
    <div className="d-flex justify-content-center">
        <i className="bi bi-cart-plus-fill"></i>
        <span className='number-static'>0</span>
    </div>
  )
}

export default CartWidget