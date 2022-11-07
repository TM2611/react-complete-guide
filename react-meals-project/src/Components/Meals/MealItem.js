import React, {useContext} from "react";
import CartCtx from "../../store/cart-context"
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const price = props.price.toFixed(2);
  const cartContext = useContext(CartCtx);

  const addToCartHandler = (amount) =>{
    cartContext.addItem({
        id: props.id,
        name: props.name,
        amount,
        price: props.price
    })

  }

  return (
    <li className={styles.meal}>
      <section>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{`$${price}`}</div>
      </section>
      <section>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler}/>
      </section>
    </li>
  );
};

export default MealItem;
