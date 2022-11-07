import React from "react";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  return (
    <li className={styles.meal}>
      <section>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>${props.price}</div>
      </section>
      <section>
        <MealItemForm id={props.id} />
      </section>
    </li>
  );
};

export default MealItem;
