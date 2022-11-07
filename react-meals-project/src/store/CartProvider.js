// Manage cart context data and provide to other components
import React, { useReducer } from "react";
import CartCtx from "./cart-context";

const initialCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_ITEM":
      const updatedItems = state.items.concat(payload);
      const updatedTotalAmount =
        state.totalAmount + payload.price * payload.amount;
      return { items: updatedItems, totalAmount: updatedTotalAmount };

    default:
      return state;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, initialCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", payload: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", payload: id });
  };

  const CartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartCtx.Provider value={CartContext}>{props.children}</CartCtx.Provider>
  );
};

export default CartProvider;
