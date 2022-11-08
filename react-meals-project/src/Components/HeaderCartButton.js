import React, { useContext, useEffect, useState } from "react";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "./Meals/CartIcon";
import CartCtx from "../store/cart-context";
import CartContext from "../store/cart-context";

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartCtx);
  const { items } = cartContext; 

  const [isBtnHighlight, setIsBtnHighlight] = useState(false);

  const numberOfCartItems = items.reduce((currValue, item) => {
    return currValue + item.amount;
  }, 0);

  const btnStyles = `${styles.button} ${isBtnHighlight ? styles.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
        return;
        
    }
    setIsBtnHighlight(true);

    const timer = setTimeout(() => {
        setIsBtnHighlight(false);
    }, 300)

    return () => {
        clearTimeout(timer)
    };
  }, [items]);

  return (
    <div>
      <button className={btnStyles} onClick={props.onClick}>
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
