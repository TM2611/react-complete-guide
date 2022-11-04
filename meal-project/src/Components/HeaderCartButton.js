import React from "react";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "./Meals/CartIcon";

const HeaderCartButton = () => {
  return (
    <div>
      <button className={styles.button}>
        <span className={styles.icon}>
          <CartIcon />
        </span>
        <div>Your Cart</div>
        <span className={styles.badge}>0</span>
      </button>
    </div>
  );
};

export default HeaderCartButton;
