import React, { useContext } from "react";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "./Meals/CartIcon";
import CartCtx from "../store/cart-context";

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartCtx);

  const numberOfCartItems = cartContext.items.reduce((currValue, item) => {
    return currValue + item.amount;
  }, 0);
  return (
    <div>
      <button className={styles.button} onClick={props.onClick}>
        <span className={styles.icon}>
          <CartIcon />
        </span>
        <div>Your Cart</div>
        <span className={styles.badge}>{numberOfCartItems}</span>
      </button>
    </div>
  );
};

export default HeaderCartButton;
