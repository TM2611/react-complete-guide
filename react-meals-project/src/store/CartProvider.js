// Manage cart context data and provide to other components
import React from 'react'
import CartContext from './cart-context'

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
    <CartContext.Provider value={CartContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider