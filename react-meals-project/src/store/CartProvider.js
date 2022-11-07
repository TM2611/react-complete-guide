// Manage cart context data and provide to other components
import React from 'react'
import CartCtx from './cart-context'

const CartProvider = (props) => {

    const addItemToCartHandler = (item) =>{

    }

    const removeItemFromCartHandler = (id) =>{

    }

    const CartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }
  return (
    <CartCtx.Provider value={CartContext}>
        {props.children}
    </CartCtx.Provider>
  )
}

export default CartProvider