// Manage cart context data and provide to other components
import React, { useReducer } from "react";
import CartCtx from "./cart-context";

const initialCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_ITEM": {
      let updatedItems = [];
      const existingCartItemIndex = state.items.findIndex(
        (x) => x.id === payload.id
      );

      if (existingCartItemIndex !== -1) {
        const existingCartItem = state.items[existingCartItemIndex];
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + payload.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(payload);
      }
      const updatedTotalAmount =
        state.totalAmount + payload.price * payload.amount;
      return { items: updatedItems, totalAmount: updatedTotalAmount };
    }
    case "REMOVE_ITEM": {
      const selectedItemIndex = state.items.findIndex((x) => x.id === payload);
      const selectedItem = state.items[selectedItemIndex];
      let updatedItems;
      let updatedTotalAmount = 0;
      if (selectedItem.amount === 1) {
        updatedItems = state.items.filter(x => x.id !== payload)
        updatedTotalAmount =
          state.totalAmount - selectedItem.price * selectedItem.amount;
      }
      else{
        const updatedItem = {
            ...selectedItem,
            amount: selectedItem.amount - 1,
          };
          updatedItems = [...state.items];
          updatedItems[selectedItemIndex] = updatedItem;
          updatedTotalAmount = state.totalAmount - selectedItem.price;
      }
      return { items: updatedItems, totalAmount: updatedTotalAmount };
    }

    default:
      return state;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    initialCartState
  );

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
